import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nj9vmwbgn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nj9vmwbgn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:diagram-dash-up-then-down-large-head-bold"} {...others} />);
}

export default Component;
