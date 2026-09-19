import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r6q-f6bnh.css';
import '../../css/a/at_ozsl4x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r6q-f6bnh"/><path class="at_ozsl4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:face-dead"} {...others} />);
}

export default Component;
