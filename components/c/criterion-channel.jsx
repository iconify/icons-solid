import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lbr_9nbyg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lbr_9nbyg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:criterion-channel"} {...others} />);
}

export default Component;
