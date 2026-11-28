import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ibpzieblb.css';
import '../../css/a/aa-euubin.css';
import '../../css/d/diivyqg2d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><circle class="ibpzieblb"/><path class="aa-euubin"/><path class="diivyqg2d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:route-x"} {...others} />);
}

export default Component;
