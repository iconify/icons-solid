import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wx3vb3kpu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wx3vb3kpu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:scan-letter-t"} {...others} />);
}

export default Component;
