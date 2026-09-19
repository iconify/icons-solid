import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/smsq4b2xo.css';
import '../../css/a/amoelnz9r.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="smsq4b2xo"/><path class="amoelnz9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:notification"} {...others} />);
}

export default Component;
