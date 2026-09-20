import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rwi52woow.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rwi52woow"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:keyboard-option-bold"} {...others} />);
}

export default Component;
