import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h_ja0lbbi.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="h_ja0lbbi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:ruff"} {...others} />);
}

export default Component;
