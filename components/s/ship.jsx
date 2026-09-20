import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/no2d2recs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="no2d2recs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:ship"} {...others} />);
}

export default Component;
