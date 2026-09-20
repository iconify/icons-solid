import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tqep12viy.css';
import '../../css/u/uk76csy7i.css';
import '../../css/d/dq5sh1btp.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="tqep12viy"/><circle class="uk76csy7i"/><path class="dq5sh1btp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:suwayomi"} {...others} />);
}

export default Component;
