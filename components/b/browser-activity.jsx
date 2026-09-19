import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nyues-25d.css';
import '../../css/l/l2z16-nsj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nyues-25d"/><path class="l2z16-nsj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:browser-activity"} {...others} />);
}

export default Component;
