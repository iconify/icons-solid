import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cf3ox7bam.css';
import '../../css/z/z8-dohb5r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cf3ox7bam"/><path class="z8-dohb5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-message-alt-check"} {...others} />);
}

export default Component;
