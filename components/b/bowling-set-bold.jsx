import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/swq5rfb6j.css';
import '../../css/h/h41ur506h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="swq5rfb6j"/><path class="h41ur506h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:bowling-set-bold"} {...others} />);
}

export default Component;
