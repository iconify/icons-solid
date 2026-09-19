import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uq6wx1c7j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uq6wx1c7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:cat-filled"} {...others} />);
}

export default Component;
