import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a6r_bpbmq.css';

const viewBox = {"width":1920,"height":1344};
const content = `<path class="a6r_bpbmq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:keyboard"} {...others} />);
}

export default Component;
