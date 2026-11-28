import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/slknnlbbl.css';
import '../../css/s/s8ywqlbta.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary slknnlbbl"/><path class="primary s8ywqlbta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:octagon-duo"} {...others} />);
}

export default Component;
