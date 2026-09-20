import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o21vrx0-m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o21vrx0-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:registered-fill"} {...others} />);
}

export default Component;
