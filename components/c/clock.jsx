import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cvqusacuk.css';
import '../../css/p/pe8xatc2t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cvqusacuk"/><path class="pe8xatc2t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:clock"} {...others} />);
}

export default Component;
