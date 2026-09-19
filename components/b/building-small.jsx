import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qfmt0acwz.css';
import '../../css/t/tc0qvy92q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qfmt0acwz"/><path class="tc0qvy92q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:building-small"} {...others} />);
}

export default Component;
