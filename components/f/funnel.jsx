import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b9xap3bkq.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="b9xap3bkq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:funnel"} {...others} />);
}

export default Component;
