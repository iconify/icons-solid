import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dj3ip275j.css';
import '../../css/k/kumpysh-p.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dj3ip275j"/><path class="kumpysh-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fuel-rod-48-bold"} {...others} />);
}

export default Component;
