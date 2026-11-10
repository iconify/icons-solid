import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o76ngqbah.css';
import '../../css/j/j1sln3vkx.css';
import '../../css/y/y-qnxyb5x.css';
import '../../css/j/jcnvp7bem.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o76ngqbah"/><path class="j1sln3vkx"/><path class="y-qnxyb5x"/><path class="jcnvp7bem"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:unlock"} {...others} />);
}

export default Component;
