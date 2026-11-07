import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/ujkefybfc.css';
import '../../css/m/my5268blj.css';
import '../../css/n/ndq0ugbyy.css';
import '../../css/z/zvr2xvbqf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ujkefybfc"/><path class="my5268blj"/><path class="ndq0ugbyy"/><path class="zvr2xvbqf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clipboard-text-broken"} {...others} />);
}

export default Component;
