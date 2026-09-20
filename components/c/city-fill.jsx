import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nlx-g_bst.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nlx-g_bst"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:city-fill"} {...others} />);
}

export default Component;
