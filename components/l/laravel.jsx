import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u5vd25u4s.css';

const viewBox = {"width":35,"height":24};
const content = `<path class="u5vd25u4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:laravel"} {...others} />);
}

export default Component;
