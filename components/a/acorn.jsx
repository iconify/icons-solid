import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kat2uhbgv.css';
import '../../css/f/falxvzb7e.css';
import '../../css/k/k6pxfgb5x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="kat2uhbgv"/><path class="falxvzb7e"/><path class="k6pxfgb5x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:acorn"} {...others} />);
}

export default Component;
