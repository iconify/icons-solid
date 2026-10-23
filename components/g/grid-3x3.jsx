import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hihb4h8dt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hihb4h8dt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:grid-3x3"} {...others} />);
}

export default Component;
