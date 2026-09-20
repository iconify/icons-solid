import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rotba7baa.css';
import '../../css/c/c52h3c0el.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rotba7baa"/><path class="c52h3c0el"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:align-horizonta-spacing-bold-duotone"} {...others} />);
}

export default Component;
