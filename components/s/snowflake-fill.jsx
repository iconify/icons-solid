import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k4bzy3bhs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k4bzy3bhs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:snowflake-fill"} {...others} />);
}

export default Component;
