import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wyqfhih1j.css';
import '../../css/f/fkrfxuhpy.css';
import '../../css/k/kxndlgbvh.css';
import '../../css/e/eu14ky5fi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wyqfhih1j"/><path class="fkrfxuhpy"/><path class="kxndlgbvh"/><path class="eu14ky5fi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:stars-line-bold"} {...others} />);
}

export default Component;
