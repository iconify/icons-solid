import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j5hl6bc3j.css';

const viewBox = {"width":384,"height":488};
const content = `<path class="j5hl6bc3j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:slashdot"} {...others} />);
}

export default Component;
