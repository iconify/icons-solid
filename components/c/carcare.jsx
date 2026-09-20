import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_an92bjh.css';
import '../../css/a/aj2v-hbjk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x_an92bjh"/><path class="aj2v-hbjk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:carcare"} {...others} />);
}

export default Component;
