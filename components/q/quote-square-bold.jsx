import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tvm_01f-a.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tvm_01f-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:quote-square-bold"} {...others} />);
}

export default Component;
