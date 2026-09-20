import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/e/evrgy0fzj.css';
import '../../css/s/s-j1bhbre.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="evrgy0fzj"/><path class="s-j1bhbre"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:edit2"} {...others} />);
}

export default Component;
