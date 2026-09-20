import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_oajib1w.css';
import '../../css/m/mur108jyx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c_oajib1w"/><path class="mur108jyx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:image-arrow-down"} {...others} />);
}

export default Component;
