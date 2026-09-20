import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m7lzhdc8k.css';
import '../../css/x/xg4x14bqu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m7lzhdc8k"/><path class="xg4x14bqu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:multiply"} {...others} />);
}

export default Component;
