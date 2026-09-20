import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wt6gxp18b.css';
import '../../css/u/u5p0aybko.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="wt6gxp18b"/><path class="u5p0aybko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:grails"} {...others} />);
}

export default Component;
