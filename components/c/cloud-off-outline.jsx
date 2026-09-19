import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yk6u7080f.css';
import '../../css/n/nrl8gacpg.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="yk6u7080f"/><path class="nrl8gacpg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:cloud-off-outline"} {...others} />);
}

export default Component;
