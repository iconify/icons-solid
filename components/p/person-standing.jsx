import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f5u_v5hac.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f5u_v5hac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:person-standing"} {...others} />);
}

export default Component;
