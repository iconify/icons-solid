import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jy4ndbb0i.css';
import '../../css/u/uszgsoqps.css';
import '../../css/j/jmec2jscz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jy4ndbb0i"/><path class="uszgsoqps"/><path class="jmec2jscz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:combine-fill"} {...others} />);
}

export default Component;
