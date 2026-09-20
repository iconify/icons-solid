import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y3erhq7-p.css';
import '../../css/m/m5_1mibrw.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="y3erhq7-p"/><path clip-rule="evenodd" class="m5_1mibrw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:eye-16"} {...others} />);
}

export default Component;
