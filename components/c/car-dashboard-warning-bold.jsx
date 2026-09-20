import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gt3335b0v.css';
import '../../css/x/x35aq7bnf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gt3335b0v"/><path class="x35aq7bnf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:car-dashboard-warning-bold"} {...others} />);
}

export default Component;
