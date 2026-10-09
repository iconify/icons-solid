import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/shndm-bvf.css';
import '../../css/d/d7fixtb7r.css';
import '../../css/l/lghqnqgnf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="shndm-bvf"/><path class="d7fixtb7r"/><path class="lghqnqgnf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:certificate-48-bold"} {...others} />);
}

export default Component;
