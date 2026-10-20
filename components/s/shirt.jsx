import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a_6h7_boj.css';
import '../../css/b/bqk5lbcwt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="a_6h7_boj"/><path class="bqk5lbcwt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:shirt"} {...others} />);
}

export default Component;
