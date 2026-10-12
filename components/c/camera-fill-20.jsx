import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/baq8k5bqx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="baq8k5bqx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:camera-fill-20"} {...others} />);
}

export default Component;
