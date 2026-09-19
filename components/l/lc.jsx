import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/k/krlql_bjj.css';
import '../../css/g/g20mbbbvd.css';
import '../../css/j/j8rvdj99s.css';
import '../../css/r/rqcwvnpsb.css';

const viewBox = {"width":32,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="krlql_bjj"/><path class="g20mbbbvd"/><path class="j8rvdj99s"/><path class="rqcwvnpsb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:lc"} {...others} />);
}

export default Component;
