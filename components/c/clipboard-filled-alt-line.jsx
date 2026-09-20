import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fvas_sv5k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fvas_sv5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:clipboard-filled-alt-line"} {...others} />);
}

export default Component;
