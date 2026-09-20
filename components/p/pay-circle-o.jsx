import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kakrw9-lf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kakrw9-lf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uiw:pay-circle-o"} {...others} />);
}

export default Component;
