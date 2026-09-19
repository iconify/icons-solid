import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i12ji_bzg.css';
import '../../css/i/i_d5bnjew.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="i12ji_bzg"/><path class="i_d5bnjew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:folder-audit-open"} {...others} />);
}

export default Component;
