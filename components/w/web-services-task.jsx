import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fkldj8bfo.css';
import '../../css/j/jiyjv684p.css';
import '../../css/t/tz_5mvbtv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fkldj8bfo"/><path class="jiyjv684p"/><path class="tz_5mvbtv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:web-services-task"} {...others} />);
}

export default Component;
