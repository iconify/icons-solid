import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zkq-xq00b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zkq-xq00b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:file-chart-column-solid"} {...others} />);
}

export default Component;
