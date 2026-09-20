import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y-y_-8kdo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y-y_-8kdo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:disabled-off"} {...others} />);
}

export default Component;
