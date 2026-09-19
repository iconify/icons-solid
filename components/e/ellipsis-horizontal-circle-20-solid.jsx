import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aw5tsgxnd.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="aw5tsgxnd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:ellipsis-horizontal-circle-20-solid"} {...others} />);
}

export default Component;
