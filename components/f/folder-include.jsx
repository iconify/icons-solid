import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/roar_qb4z.css';
import '../../css/b/bwck-2bqv.css';
import '../../css/x/x804q6kvo.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="roar_qb4z"/><circle class="bwck-2bqv"/><path class="x804q6kvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:folder-include"} {...others} />);
}

export default Component;
