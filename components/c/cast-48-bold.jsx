import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ona24jwrs.css';
import '../../css/x/x1xwve8uf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ona24jwrs"/><path class="x1xwve8uf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cast-48-bold"} {...others} />);
}

export default Component;
