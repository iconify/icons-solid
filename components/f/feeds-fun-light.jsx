import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tkleevbel.css';
import '../../css/k/koobuxbzj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tkleevbel"/><path class="koobuxbzj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:feeds-fun-light"} {...others} />);
}

export default Component;
