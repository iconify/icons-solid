import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w3ugng94a.css';
import '../../css/d/dcz5ovbjt.css';
import '../../css/k/kyml_y7yk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="w3ugng94a"/><path class="dcz5ovbjt"/><path class="kyml_y7yk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:folder-linux"} {...others} />);
}

export default Component;
