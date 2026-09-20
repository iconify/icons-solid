import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uk3wpst3e.css';
import '../../css/y/yp_-cobqv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uk3wpst3e"/><path class="yp_-cobqv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:night-moon-begin-bold"} {...others} />);
}

export default Component;
