import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mvg6edodd.css';
import '../../css/d/d9an_9pbc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mvg6edodd secondary"/><path class="d9an_9pbc primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:infinity-duo"} {...others} />);
}

export default Component;
