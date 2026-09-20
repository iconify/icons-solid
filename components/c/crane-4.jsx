import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v1ck9ujgt.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="v1ck9ujgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:crane-4"} {...others} />);
}

export default Component;
