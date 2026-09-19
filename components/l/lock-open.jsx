import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lhfzghafj.css';

const viewBox = {"width":582,"height":1000};
const content = `<path class="lhfzghafj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"websymbol:lock-open"} {...others} />);
}

export default Component;
