import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x9c993b2t.css';
import '../../css/y/yu6hplrgd.css';
import '../../css/k/kauhwtbid.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="x9c993b2t"/><path class="yu6hplrgd"/><path class="kauhwtbid"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:washing-machine-48-bold"} {...others} />);
}

export default Component;
