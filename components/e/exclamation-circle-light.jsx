import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q_ma8083f.css';
import '../../css/v/v9y5wi_ot.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q_ma8083f"/><path class="v9y5wi_ot"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:exclamation-circle-light"} {...others} />);
}

export default Component;
