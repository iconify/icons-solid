import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rsa1otzbu.css';
import '../../css/y/y0tfqxb2l.css';
import '../../css/b/blfm0r9xh.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/m/mehba9vbc.css';
import '../../css/e/e6nbv9jee.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="rsa1otzbu"/><path class="y0tfqxb2l"/><path class="blfm0r9xh"/><g class="brzn_0bpr"><path class="mehba9vbc"/><path class="e6nbv9jee"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:square-with-left-half-black"} {...others} />);
}

export default Component;
