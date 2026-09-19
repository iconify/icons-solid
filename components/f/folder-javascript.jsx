import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/roar_qb4z.css';
import '../../css/a/azfjht1_y.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="roar_qb4z"/><path class="azfjht1_y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:folder-javascript"} {...others} />);
}

export default Component;
