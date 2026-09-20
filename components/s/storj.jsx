import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_ruqhyhp.css';
import '../../css/p/p95k6o2lr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j_ruqhyhp"/><path clip-rule="evenodd" class="p95k6o2lr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:storj"} {...others} />);
}

export default Component;
