import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o11scyb1q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o11scyb1q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:trip-road-bold"} {...others} />);
}

export default Component;
