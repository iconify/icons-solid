import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x1-gz_pwy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x1-gz_pwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:star-s-line"} {...others} />);
}

export default Component;
