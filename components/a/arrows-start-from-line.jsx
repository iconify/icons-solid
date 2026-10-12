import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ep14q-bov.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ep14q-bov"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:arrows-start-from-line"} {...others} />);
}

export default Component;
