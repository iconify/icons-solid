import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/voldqwefv.css';
import '../../css/z/z-xry-ugs.css';
import '../../css/d/d4viujbxu.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="voldqwefv"/><circle class="z-xry-ugs"/><path class="d4viujbxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:test-js"} {...others} />);
}

export default Component;
