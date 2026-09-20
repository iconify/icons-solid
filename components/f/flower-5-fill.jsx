import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zdf3tlb6w.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zdf3tlb6w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:flower-5-fill"} {...others} />);
}

export default Component;
