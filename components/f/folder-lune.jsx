import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/roar_qb4z.css';
import '../../css/v/vzih_tb-s.css';
import '../../css/r/rn06_bbzy.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="roar_qb4z"/><path class="vzih_tb-s"/><path class="rn06_bbzy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:folder-lune"} {...others} />);
}

export default Component;
