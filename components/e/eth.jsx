import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dor-qnbot.css';
import '../../css/u/uzfziisgz.css';
import '../../css/j/jv7_enpyu.css';
import '../../css/i/inlew3bgh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dor-qnbot"/><path class="uzfziisgz"/><path clip-rule="evenodd" class="jv7_enpyu"/><path clip-rule="evenodd" class="inlew3bgh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:eth"} {...others} />);
}

export default Component;
