import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c70u1_9qk.css';
import '../../css/y/y_nsz_h-y.css';
import '../../css/g/gzhzl4bww.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="c70u1_9qk"/><circle class="y_nsz_h-y"/><path class="gzhzl4bww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:eye-open"} {...others} />);
}

export default Component;
