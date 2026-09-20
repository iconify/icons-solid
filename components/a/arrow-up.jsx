import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_x1-jbvx.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-4.5};
const content = `<path class="t_x1-jbvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:arrow-up"} {...others} />);
}

export default Component;
