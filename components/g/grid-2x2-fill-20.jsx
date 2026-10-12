import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eq3mh2agg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="eq3mh2agg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:grid-2x2-fill-20"} {...others} />);
}

export default Component;
