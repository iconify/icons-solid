import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h1crshb5u.css';
import '../../css/b/byrocu6aw.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="h1crshb5u"/><path class="byrocu6aw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:folder-direnv-open"} {...others} />);
}

export default Component;
