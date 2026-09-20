import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jiy_jr2tf.css';
import '../../css/a/azjswrsrh.css';
import '../../css/n/n9w5lobwk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jiy_jr2tf"/><path class="azjswrsrh"/><path class="n9w5lobwk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:grc"} {...others} />);
}

export default Component;
