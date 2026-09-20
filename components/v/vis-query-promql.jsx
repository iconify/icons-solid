import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w8s6xvu0y.css';
import '../../css/e/ed612wbnx.css';
import '../../css/o/o-g8_8o4b.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="w8s6xvu0y"/><path class="ed612wbnx"/><path clip-rule="evenodd" class="o-g8_8o4b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:vis-query-promql"} {...others} />);
}

export default Component;
