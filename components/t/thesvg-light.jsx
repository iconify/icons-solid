import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/abcsioblf.css';
import '../../css/u/uc8haducx.css';
import '../../css/e/e01ksbcky.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="abcsioblf"><path class="uc8haducx"/><path class="e01ksbcky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:thesvg-light"} {...others} />);
}

export default Component;
