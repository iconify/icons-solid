import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_ulnzfce.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e_ulnzfce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:thumb-up-alt-2-fill"} {...others} />);
}

export default Component;
