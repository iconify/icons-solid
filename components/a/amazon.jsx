import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gj7t04z_s.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="gj7t04z_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dashicons:amazon"} {...others} />);
}

export default Component;
