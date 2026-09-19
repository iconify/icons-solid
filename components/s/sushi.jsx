import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_7bycxnx.css';
import '../../css/u/uqzyn-kgu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s_7bycxnx"/><path class="uqzyn-kgu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:sushi"} {...others} />);
}

export default Component;
