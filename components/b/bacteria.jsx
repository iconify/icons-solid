import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/viaa6ubuw.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/x/xprwyhbwt.css';
import '../../css/k/ks7bf8bjr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="viaa6ubuw"/><circle class="shu3xdl9q"/><circle class="xprwyhbwt"/><path class="ks7bf8bjr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bacteria"} {...others} />);
}

export default Component;
