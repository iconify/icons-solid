import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/em933ob1r.css';
import '../../css/u/uxs2crpvz.css';
import '../../css/f/fr6n2hqmj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="em933ob1r"/><path class="uxs2crpvz"/><path class="fr6n2hqmj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bolt-x-48"} {...others} />);
}

export default Component;
