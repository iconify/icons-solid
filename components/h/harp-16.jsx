import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dzjyarb7v.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="dzjyarb7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:harp-16"} {...others} />);
}

export default Component;
