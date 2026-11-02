import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k3kgz5bvp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k3kgz5bvp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:rotate-x-fill"} {...others} />);
}

export default Component;
