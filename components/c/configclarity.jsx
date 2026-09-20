import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/niwlhgc7w.css';
import '../../css/q/qvtar0ceo.css';
import '../../css/m/mt75siyua.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="niwlhgc7w"/><path class="qvtar0ceo"/><path class="mt75siyua"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:configclarity"} {...others} />);
}

export default Component;
