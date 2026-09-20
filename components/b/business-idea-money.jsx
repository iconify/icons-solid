import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mquebcbfx.css';
import '../../css/j/jqt5touzh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="mquebcbfx"/><path class="jqt5touzh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:business-idea-money"} {...others} />);
}

export default Component;
