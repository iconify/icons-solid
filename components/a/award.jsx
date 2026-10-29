import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v4tz9h42q.css';
import '../../css/x/xri09lbat.css';
import '../../css/z/z3e77fxct.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v4tz9h42q"/><path class="xri09lbat"/><path class="z3e77fxct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:award"} {...others} />);
}

export default Component;
