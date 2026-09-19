import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hs5tpe-zu.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="hs5tpe-zu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:cloud-drizzle-fill"} {...others} />);
}

export default Component;
