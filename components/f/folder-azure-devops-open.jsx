import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i12ji_bzg.css';
import '../../css/v/vc4wxe89z.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="i12ji_bzg"/><path class="vc4wxe89z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:folder-azure-devops-open"} {...others} />);
}

export default Component;
