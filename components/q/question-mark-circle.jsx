import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dyhf-2_bh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dyhf-2_bh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:question-mark-circle"} {...others} />);
}

export default Component;
