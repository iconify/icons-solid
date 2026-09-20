import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x8z507ben.css';
import '../../css/k/kv93fkbuc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x8z507ben"/><path class="kv93fkbuc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:jelu"} {...others} />);
}

export default Component;
