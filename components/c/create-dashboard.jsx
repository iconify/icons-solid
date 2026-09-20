import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mf4cguadx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mf4cguadx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uit:create-dashboard"} {...others} />);
}

export default Component;
