import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qbhvdvbrl.css';
import '../../css/y/yf7o8narz.css';
import '../../css/t/tlo2r7sql.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="qbhvdvbrl"/><path class="yf7o8narz"/><path class="tlo2r7sql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:database-plus"} {...others} />);
}

export default Component;
