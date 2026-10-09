import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kaei814vi.css';
import '../../css/x/xwqlmeb2f.css';
import '../../css/i/i10hk57ox.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kaei814vi"/><path class="xwqlmeb2f"/><path class="i10hk57ox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ev-charger-home-48"} {...others} />);
}

export default Component;
