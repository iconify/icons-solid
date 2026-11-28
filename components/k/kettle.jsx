import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/y6-k7kb8b.css';
import '../../css/p/pxgwswq5k.css';
import '../../css/a/a8osghvet.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="y6-k7kb8b"/><path class="pxgwswq5k"/><path class="a8osghvet"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:kettle"} {...others} />);
}

export default Component;
