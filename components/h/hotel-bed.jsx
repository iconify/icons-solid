import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f_zc_fymj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f_zc_fymj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:hotel-bed"} {...others} />);
}

export default Component;
