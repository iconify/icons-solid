import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/f/f-salgbqh.css';
import '../../css/o/olc6debim.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="f-salgbqh"/><path class="olc6debim"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:add-square"} {...others} />);
}

export default Component;
