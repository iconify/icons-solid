import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dulwwp61c.css';
import '../../css/v/vun5vpb1i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dulwwp61c"/><path class="vun5vpb1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:timer-10-bold"} {...others} />);
}

export default Component;
