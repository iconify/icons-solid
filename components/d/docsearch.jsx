import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/v/vn8sbhbcq.css';
import '../../css/e/e6yrqacor.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1mjunbsu"><path class="vn8sbhbcq"/><path class="e6yrqacor"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:docsearch"} {...others} />);
}

export default Component;
