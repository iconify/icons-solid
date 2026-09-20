import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2luwybss.css';
import '../../css/e/ekdghkqub.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d2luwybss"/><path class="ekdghkqub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:design-tool-pen-brush-cup"} {...others} />);
}

export default Component;
