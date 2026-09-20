import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q1igjb5bq.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="q1igjb5bq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:coughing-face-with-spittle-in-circle-outline"} {...others} />);
}

export default Component;
