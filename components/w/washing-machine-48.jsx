import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/smfo77bmv.css';
import '../../css/b/b48504bnz.css';
import '../../css/k/k2rppxbug.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="smfo77bmv"/><path class="b48504bnz"/><path class="k2rppxbug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:washing-machine-48"} {...others} />);
}

export default Component;
