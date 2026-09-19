import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/ro3entbmx.css';
import '../../css/j/jv3v06bbc.css';
import '../../css/m/m-u0yfdqf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ro3entbmx"/><path class="jv3v06bbc"/><path class="m-u0yfdqf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:statistic-up"} {...others} />);
}

export default Component;
