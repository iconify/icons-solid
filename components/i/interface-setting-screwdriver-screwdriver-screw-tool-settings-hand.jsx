import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oq4j91btj.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="oq4j91btj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-setting-screwdriver-screwdriver-screw-tool-settings-hand"} {...others} />);
}

export default Component;
