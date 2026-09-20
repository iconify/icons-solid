import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qk7c0-brn.css';
import '../../css/b/bcoesb68t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qk7c0-brn"/><path class="bcoesb68t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:cog-hand-give-1-bold"} {...others} />);
}

export default Component;
