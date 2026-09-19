import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/focov3bjk.css';

const viewBox = {"width":2368,"height":1664};
const content = `<path class="focov3bjk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:id-card-alt"} {...others} />);
}

export default Component;
