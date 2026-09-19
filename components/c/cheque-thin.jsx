import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d6y5k5ocf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d6y5k5ocf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:cheque-thin"} {...others} />);
}

export default Component;
