import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bv4m5hauv.css';
import '../../css/t/tma0dchkx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bv4m5hauv"/><path clip-rule="evenodd" class="tma0dchkx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:adobe-after-effects-solid"} {...others} />);
}

export default Component;
