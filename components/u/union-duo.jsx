import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkr0jbczq.css';
import '../../css/e/e66ctgbgu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dkr0jbczq secondary"/><path class="e66ctgbgu primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:union-duo"} {...others} />);
}

export default Component;
