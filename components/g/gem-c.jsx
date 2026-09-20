import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bofrjubrr.css';
import '../../css/w/wq29_tbln.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bofrjubrr"/><path class="wq29_tbln"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:gem-c"} {...others} />);
}

export default Component;
