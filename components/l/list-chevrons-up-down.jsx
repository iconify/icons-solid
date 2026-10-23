import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wr7obeqxm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wr7obeqxm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:list-chevrons-up-down"} {...others} />);
}

export default Component;
