import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qjux9zbyg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qjux9zbyg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:sun-cloudy-fill"} {...others} />);
}

export default Component;
