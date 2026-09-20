import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zn-ou5dst.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zn-ou5dst"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sofe-dark"} {...others} />);
}

export default Component;
