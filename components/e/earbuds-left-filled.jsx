import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vdzw6oeal.css';
import '../../css/f/fm3s1pbab.css';
import '../../css/q/qdabs8b6s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vdzw6oeal"/><path class="fm3s1pbab"/><path clip-rule="evenodd" class="qdabs8b6s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:earbuds-left-filled"} {...others} />);
}

export default Component;
