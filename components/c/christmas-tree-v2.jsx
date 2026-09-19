import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t7ufsrb2s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t7ufsrb2s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:christmas-tree-v2"} {...others} />);
}

export default Component;
