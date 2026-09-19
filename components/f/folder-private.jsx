import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/roar_qb4z.css';
import '../../css/p/pgzvnfbvt.css';
import '../../css/r/r--b2dpcc.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="roar_qb4z"/><circle class="pgzvnfbvt"/><path class="r--b2dpcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:folder-private"} {...others} />);
}

export default Component;
