import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u3f2lt1bs.css';
import '../../css/x/x720oqwne.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u3f2lt1bs"/><path class="x720oqwne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:social-googleplus"} {...others} />);
}

export default Component;
