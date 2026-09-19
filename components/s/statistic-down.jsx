import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/ro3entbmx.css';
import '../../css/n/nan1oj9ep.css';
import '../../css/v/v4cifz20c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ro3entbmx"/><path class="nan1oj9ep"/><path class="v4cifz20c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:statistic-down"} {...others} />);
}

export default Component;
