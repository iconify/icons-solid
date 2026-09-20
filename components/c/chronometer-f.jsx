import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_stj679q.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-3};
const content = `<path class="x_stj679q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:chronometer-f"} {...others} />);
}

export default Component;
