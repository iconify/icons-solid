import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/czu-macwp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="czu-macwp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:withoutbg-dark"} {...others} />);
}

export default Component;
