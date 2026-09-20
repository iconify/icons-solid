import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s4nb21bnx.css';
import '../../css/e/eswzabcqv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s4nb21bnx"/><path class="eswzabcqv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nakama-light"} {...others} />);
}

export default Component;
