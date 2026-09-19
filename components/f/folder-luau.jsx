import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/roar_qb4z.css';
import '../../css/b/bm8h3db9m.css';
import '../../css/d/ddmfo5g7c.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="roar_qb4z"/><path class="bm8h3db9m"/><path class="ddmfo5g7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:folder-luau"} {...others} />);
}

export default Component;
