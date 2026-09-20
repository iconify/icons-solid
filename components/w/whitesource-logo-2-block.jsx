import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zoe_q5b2b.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zoe_q5b2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:whitesource-logo-2-block"} {...others} />);
}

export default Component;
