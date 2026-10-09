import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fg_sfhb4g.css';
import '../../css/v/vw_qo7apa.css';
import '../../css/b/bsihc0byt.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fg_sfhb4g"/><path class="vw_qo7apa"/><path class="bsihc0byt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:certificate-20"} {...others} />);
}

export default Component;
