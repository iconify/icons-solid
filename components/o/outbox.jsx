import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dei_17bxy.css';
import '../../css/h/ht7052bix.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dei_17bxy"/><path class="ht7052bix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:outbox"} {...others} />);
}

export default Component;
