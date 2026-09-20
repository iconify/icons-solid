import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oxs-f7bng.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oxs-f7bng"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:layout-vertical-fill"} {...others} />);
}

export default Component;
