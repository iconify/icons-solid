import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mh6eqlk_e.css';
import '../../css/d/dqmh4gbwi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mh6eqlk_e"/><path class="dqmh4gbwi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:camera-tripod-bold"} {...others} />);
}

export default Component;
