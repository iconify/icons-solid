import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fx61_ej9h.css';
import '../../css/e/eyyhcy0xu.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="fx61_ej9h"/><path class="eyyhcy0xu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:left-arrow-curving-right"} {...others} />);
}

export default Component;
