import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufxbcneuu.css';
import '../../css/h/h2vtajpsj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ufxbcneuu"/><path class="h2vtajpsj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:layer-arrow-up-filled"} {...others} />);
}

export default Component;
