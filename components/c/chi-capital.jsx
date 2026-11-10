import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/r/r6ept0bwt.css';
import '../../css/j/jfh6c_bwl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="r6ept0bwt"/><path class="jfh6c_bwl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:chi-capital"} {...others} />);
}

export default Component;
