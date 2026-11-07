import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k6st3otec.css';
import '../../css/c/c14tr3b4t.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="k6st3otec"/><path class="c14tr3b4t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:align-vertical-spacing-bold"} {...others} />);
}

export default Component;
