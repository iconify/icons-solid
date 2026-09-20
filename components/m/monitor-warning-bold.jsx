import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ritv8ybea.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ritv8ybea"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:monitor-warning-bold"} {...others} />);
}

export default Component;
