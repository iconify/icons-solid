import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zrt_g7bic.css';
import '../../css/r/rzcm8fagf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zrt_g7bic"/><path class="rzcm8fagf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:gift-fill"} {...others} />);
}

export default Component;
