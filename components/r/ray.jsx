import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k0htrpbhr.css';
import '../../css/h/hbcr0mbsz.css';
import '../../css/e/empd4xbpa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k0htrpbhr"/><path class="hbcr0mbsz"/><path class="empd4xbpa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ray"} {...others} />);
}

export default Component;
