import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eh5mexb5b.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="eh5mexb5b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:api-blueprint"} {...others} />);
}

export default Component;
