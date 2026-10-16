import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc7h1ybso.css';
import '../../css/s/saf2gf3kz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bc7h1ybso"/><path class="saf2gf3kz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:terraced-house-48"} {...others} />);
}

export default Component;
