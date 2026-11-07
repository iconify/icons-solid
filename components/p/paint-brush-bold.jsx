import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kzofximaw.css';
import '../../css/k/kbosvfeuz.css';
import '../../css/x/xkwuocbvq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kzofximaw"/><path class="kbosvfeuz"/><path class="xkwuocbvq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:paint-brush-bold"} {...others} />);
}

export default Component;
