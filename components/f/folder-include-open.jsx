import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i12ji_bzg.css';
import '../../css/b/bwck-2bqv.css';
import '../../css/x/x804q6kvo.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="i12ji_bzg"/><circle class="bwck-2bqv"/><path class="x804q6kvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:folder-include-open"} {...others} />);
}

export default Component;
