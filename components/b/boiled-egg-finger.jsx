import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pmny2jbne.css';

const viewBox = {"width":304,"height":520};
const content = `<path class="pmny2jbne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:boiled-egg-finger"} {...others} />);
}

export default Component;
