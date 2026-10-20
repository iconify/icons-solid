import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eh9bfhbov.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="eh9bfhbov"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:tree-trunk"} {...others} />);
}

export default Component;
