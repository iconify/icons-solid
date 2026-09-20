import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u_b9ttbfs.css';

const viewBox = {"width":24,"height":24,"left":-4.5,"top":-4.5};
const content = `<path class="u_b9ttbfs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:plus"} {...others} />);
}

export default Component;
