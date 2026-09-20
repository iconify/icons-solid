import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qktj-0d9y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qktj-0d9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:cerbos-light"} {...others} />);
}

export default Component;
