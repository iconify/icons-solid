import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/if33zkffk.css';
import '../../css/m/m0et3bbhv.css';
import '../../css/q/q6hywkbbd.css';
import '../../css/z/zy4ouxbjl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="if33zkffk"/><path class="m0et3bbhv"/><path class="q6hywkbbd"/><path class="zy4ouxbjl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:kindle"} {...others} />);
}

export default Component;
