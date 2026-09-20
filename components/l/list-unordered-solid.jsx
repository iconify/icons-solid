import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zi442-b8d.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="zi442-b8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:list-unordered-solid"} {...others} />);
}

export default Component;
