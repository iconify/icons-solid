import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rcp2bq36g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rcp2bq36g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:pinterest-line"} {...others} />);
}

export default Component;
