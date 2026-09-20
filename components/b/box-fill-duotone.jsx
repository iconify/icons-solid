import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tro4qhbhl.css';
import '../../css/y/y5a_feb2v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tro4qhbhl"/><path class="y5a_feb2v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:box-fill-duotone"} {...others} />);
}

export default Component;
