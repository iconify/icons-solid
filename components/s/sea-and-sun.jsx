import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qf7uh1sir.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qf7uh1sir"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:sea-and-sun"} {...others} />);
}

export default Component;
