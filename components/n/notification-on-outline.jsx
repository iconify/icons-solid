import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ekmwabpqj.css';
import '../../css/p/pg8vlgzhf.css';
import '../../css/e/ehqo78bzj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ekmwabpqj"/><path clip-rule="evenodd" class="pg8vlgzhf"/><path class="ehqo78bzj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:notification-on-outline"} {...others} />);
}

export default Component;
