import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/o/ood7osb5w.css';
import '../../css/v/v5a3ll5yr.css';
import '../../css/g/g4jq594cw.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="umm606kxf"><path class="ood7osb5w"/><path class="v5a3ll5yr"/><path class="g4jq594cw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:app-window"} {...others} />);
}

export default Component;
