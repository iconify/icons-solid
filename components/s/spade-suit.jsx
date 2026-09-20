import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j3he2rb6n.css';
import '../../css/s/snp287xku.css';
import '../../css/y/yeeetfbff.css';
import '../../css/w/wqhty6b0o.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j3he2rb6n"/><path class="snp287xku"/><path class="yeeetfbff"/><path class="wqhty6b0o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:spade-suit"} {...others} />);
}

export default Component;
