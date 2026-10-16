import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g0ni6vb5b.css';
import '../../css/e/edo682exk.css';
import '../../css/a/atrqkbbau.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="g0ni6vb5b"/><path class="edo682exk"/><path class="atrqkbbau"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:library-20"} {...others} />);
}

export default Component;
