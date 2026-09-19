import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s2vu9_i2i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s2vu9_i2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:parallelogram"} {...others} />);
}

export default Component;
