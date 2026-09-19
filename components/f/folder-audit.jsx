import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/roar_qb4z.css';
import '../../css/i/i_d5bnjew.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="roar_qb4z"/><path class="i_d5bnjew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:folder-audit"} {...others} />);
}

export default Component;
