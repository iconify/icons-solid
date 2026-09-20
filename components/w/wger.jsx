import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vjgp6ub7i.css';
import '../../css/e/epzlemb8k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vjgp6ub7i"/><path class="epzlemb8k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:wger"} {...others} />);
}

export default Component;
