import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_8f_d_5n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c_8f_d_5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:chevron-down"} {...others} />);
}

export default Component;
