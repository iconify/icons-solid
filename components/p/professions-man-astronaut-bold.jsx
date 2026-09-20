import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b0bkqib-z.css';
import '../../css/h/h9ba1ntbw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b0bkqib-z"/><path class="h9ba1ntbw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:professions-man-astronaut-bold"} {...others} />);
}

export default Component;
