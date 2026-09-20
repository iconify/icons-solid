import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pkg9k32nj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pkg9k32nj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:fraunhofer-gesellschaft"} {...others} />);
}

export default Component;
