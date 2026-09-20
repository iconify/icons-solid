import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkyxzwb9q.css';
import '../../css/a/aujto2tno.css';
import '../../css/v/v999r7bpq.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="xkyxzwb9q"><path class="aujto2tno"/><path class="v999r7bpq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:sign-at"} {...others} />);
}

export default Component;
