import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p-w2wcd_t.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="p-w2wcd_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:people-sitting-in-theater"} {...others} />);
}

export default Component;
