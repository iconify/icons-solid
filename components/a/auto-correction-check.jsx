import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkyxzwb9q.css';
import '../../css/u/uh5e88bra.css';
import '../../css/r/r-dx1tbso.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="xkyxzwb9q"><path class="uh5e88bra"/><path class="r-dx1tbso"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:auto-correction-check"} {...others} />);
}

export default Component;
