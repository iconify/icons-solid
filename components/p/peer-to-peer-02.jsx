import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ik1pfo3tm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ik1pfo3tm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:peer-to-peer-02"} {...others} />);
}

export default Component;
