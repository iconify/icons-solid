import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dh2h_7u6f.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="dh2h_7u6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:arrowtriangle-up-square-fill"} {...others} />);
}

export default Component;
