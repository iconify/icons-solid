import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y0ennjy9f.css';
import '../../css/a/a446ljbdh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y0ennjy9f"/><path clip-rule="evenodd" class="a446ljbdh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:drag-squares-horizontal-duotone"} {...others} />);
}

export default Component;
