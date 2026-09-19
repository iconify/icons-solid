import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cbh9_3bgo.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="cbh9_3bgo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:semgrep-ignore"} {...others} />);
}

export default Component;
