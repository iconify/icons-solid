import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w9m-zgvqr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w9m-zgvqr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:size-warp"} {...others} />);
}

export default Component;
