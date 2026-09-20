import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eq1uwrb7y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eq1uwrb7y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:signal-cellular-1-line"} {...others} />);
}

export default Component;
