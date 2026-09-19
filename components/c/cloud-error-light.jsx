import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/f/f3xl7f2bt.css';
import '../../css/a/a2jwblbfm.css';
import '../../css/j/joeryvb2t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="f3xl7f2bt"/><path class="a2jwblbfm"/><path class="joeryvb2t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:cloud-error-light"} {...others} />);
}

export default Component;
