import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fqep3ob2t.css';
import '../../css/p/pvryphb7g.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fqep3ob2t"/><path class="pvryphb7g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:seaweed-48-bold"} {...others} />);
}

export default Component;
