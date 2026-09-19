import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aoskosbxd.css';
import '../../css/p/puyvfbckp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aoskosbxd b"/><path class="b puyvfbckp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:scale"} {...others} />);
}

export default Component;
