import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to_00xq7r.css';
import '../../css/s/sd17u1b8i.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="to_00xq7r"/><path class="sd17u1b8i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:fastify"} {...others} />);
}

export default Component;
