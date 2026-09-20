import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ff99hubzr.css';
import '../../css/o/omxh1nh0o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ff99hubzr"/><path class="omxh1nh0o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:design-tool-compass-bold"} {...others} />);
}

export default Component;
