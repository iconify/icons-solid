import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k97abjb9v.css';
import '../../css/g/gtbcxr-sv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k97abjb9v"/><path class="gtbcxr-sv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pine-tree-20-bold"} {...others} />);
}

export default Component;
