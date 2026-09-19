import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zvgwoyb4l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zvgwoyb4l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"feather:chevron-right"} {...others} />);
}

export default Component;
