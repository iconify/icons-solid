import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ob991ac-v.css';
import '../../css/l/lbnegcbec.css';
import '../../css/v/vneknnfuw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ob991ac-v"/><path class="lbnegcbec"/><path class="vneknnfuw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:earth-refresh-bold"} {...others} />);
}

export default Component;
