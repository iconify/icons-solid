import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oysno6b8h.css';
import '../../css/i/ijdqjaczl.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="oysno6b8h"/><path class="ijdqjaczl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:location"} {...others} />);
}

export default Component;
