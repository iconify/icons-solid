import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/alp85pbpf.css';
import '../../css/o/o3nn0j39f.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="alp85pbpf"/><path class="o3nn0j39f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pram-20-bold"} {...others} />);
}

export default Component;
