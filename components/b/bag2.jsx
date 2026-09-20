import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/w8iuj2y-t.css';
import '../../css/w/w2s6u21mt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="w8iuj2y-t"/><path class="w2s6u21mt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bag2"} {...others} />);
}

export default Component;
