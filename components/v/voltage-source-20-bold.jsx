import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i1aumdb7c.css';
import '../../css/a/a8jlsdb4l.css';
import '../../css/m/mj6ibrhop.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="i1aumdb7c"/><path class="a8jlsdb4l"/><path class="mj6ibrhop"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:voltage-source-20-bold"} {...others} />);
}

export default Component;
