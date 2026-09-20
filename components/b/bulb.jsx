import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zxhk30f5d.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="zxhk30f5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:bulb"} {...others} />);
}

export default Component;
