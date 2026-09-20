import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gvl2pzwmx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gvl2pzwmx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:insurance-hand-bold"} {...others} />);
}

export default Component;
