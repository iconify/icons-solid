import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ar0iqhbgf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ar0iqhbgf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:arrow-down-end"} {...others} />);
}

export default Component;
