import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/un6uujgpt.css';
import '../../css/s/s-3pdzbie.css';
import '../../css/f/f9_1u9bdt.css';
import '../../css/h/hbrmujrkd.css';

const viewBox = {"width":154,"height":154};
const content = `<g transform="translate(.11 .11)"><circle class="un6uujgpt"/><g class="s-3pdzbie"><path class="f9_1u9bdt"/><path class="hbrmujrkd"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:apprise-api"} {...others} />);
}

export default Component;
