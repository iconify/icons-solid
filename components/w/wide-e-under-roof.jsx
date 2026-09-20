import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f8gosiblu.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="f8gosiblu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:wide-e-under-roof"} {...others} />);
}

export default Component;
