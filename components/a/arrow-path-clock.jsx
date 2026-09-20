import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/uqpo4lbmz.css';
import '../../css/m/m9qntro5r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="uqpo4lbmz"/><path class="m9qntro5r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:arrow-path-clock"} {...others} />);
}

export default Component;
