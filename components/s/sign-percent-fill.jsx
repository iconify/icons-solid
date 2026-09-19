import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tbnphpbps.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tbnphpbps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:sign-percent-fill"} {...others} />);
}

export default Component;
