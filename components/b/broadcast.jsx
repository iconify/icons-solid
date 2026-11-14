import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/j/jxl67pbry.css';
import '../../css/t/t35oomb7j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><circle class="jxl67pbry"/><path class="t35oomb7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:broadcast"} {...others} />);
}

export default Component;
