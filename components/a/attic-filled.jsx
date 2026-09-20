import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/egngdtb-a.css';
import '../../css/k/kmix8d4jl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="egngdtb-a"/><path class="kmix8d4jl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:attic-filled"} {...others} />);
}

export default Component;
