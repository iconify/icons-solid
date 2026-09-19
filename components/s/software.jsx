import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u-7zdubzz.css';
import '../../css/j/jjj7yd_xu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u-7zdubzz"/><path class="jjj7yd_xu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:software"} {...others} />);
}

export default Component;
