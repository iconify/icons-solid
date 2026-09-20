import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/imlqtwr-v.css';
import '../../css/b/bmvaj0s_p.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="imlqtwr-v"/><path class="bmvaj0s_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:email-envelope"} {...others} />);
}

export default Component;
