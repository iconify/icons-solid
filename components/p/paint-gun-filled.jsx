import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ivw2o-sty.css';
import '../../css/i/i4_d93b6h.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ivw2o-sty"/><path class="i4_d93b6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:paint-gun-filled"} {...others} />);
}

export default Component;
