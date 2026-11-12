import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vvgqtqb8d.css';
import '../../css/f/f7e4_uyaw.css';
import '../../css/s/sg9uajj-e.css';
import '../../css/m/m52v0xb7c.css';
import '../../css/y/yjz70yk9z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vvgqtqb8d"/><path class="f7e4_uyaw"/><path class="sg9uajj-e"/><path class="m52v0xb7c"/><path class="yjz70yk9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:relaticle-dark"} {...others} />);
}

export default Component;
