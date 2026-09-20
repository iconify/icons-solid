import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/g8xpz3b0x.css';
import '../../css/b/beo_nnb7c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="g8xpz3b0x"/><rect class="beo_nnb7c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:lock-open2"} {...others} />);
}

export default Component;
