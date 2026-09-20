import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nxi6bp23l.css';
import '../../css/f/fmxdhkgfp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nxi6bp23l"/><path class="fmxdhkgfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:arrow-circle-up"} {...others} />);
}

export default Component;
