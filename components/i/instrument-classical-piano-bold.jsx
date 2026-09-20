import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mjodv2swo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mjodv2swo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:instrument-classical-piano-bold"} {...others} />);
}

export default Component;
