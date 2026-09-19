import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dby-twbls.css';
import '../../css/b/bg9dcj-ic.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dby-twbls"/><path class="bg9dcj-ic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:industry-slash"} {...others} />);
}

export default Component;
