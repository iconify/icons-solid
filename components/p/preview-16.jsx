import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oqykx7ber.css';
import '../../css/a/ayrt9cq7j.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="oqykx7ber"/><path clip-rule="evenodd" class="ayrt9cq7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:preview-16"} {...others} />);
}

export default Component;
