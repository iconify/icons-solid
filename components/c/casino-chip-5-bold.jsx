import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gq6pcxtyo.css';
import '../../css/p/pod1125gd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gq6pcxtyo"/><path class="pod1125gd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:casino-chip-5-bold"} {...others} />);
}

export default Component;
