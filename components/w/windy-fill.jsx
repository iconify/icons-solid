import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sfnsi60mx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sfnsi60mx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:windy-fill"} {...others} />);
}

export default Component;
