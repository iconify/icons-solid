import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nbpj61t4x.css';
import '../../css/m/m68w6s2bk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nbpj61t4x"/><path class="m68w6s2bk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:book-sound-audio"} {...others} />);
}

export default Component;
