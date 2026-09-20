import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uiffuvbfp.css';
import '../../css/y/ya4gq6bza.css';
import '../../css/j/jyju9u0xf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="uiffuvbfp"/><path class="ya4gq6bza"/><path class="jyju9u0xf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pen-2-bold"} {...others} />);
}

export default Component;
