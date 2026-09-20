import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to90uy7mq.css';
import '../../css/k/kz_jhsbqq.css';
import '../../css/k/khkw4wb8x.css';
import '../../css/n/n1z-x8b7b.css';
import '../../css/s/syc78v1sk.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="to90uy7mq"/><path class="kz_jhsbqq"/><path class="khkw4wb8x"/><path class="n1z-x8b7b"/><path class="syc78v1sk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:content-files-draw-content"} {...others} />);
}

export default Component;
