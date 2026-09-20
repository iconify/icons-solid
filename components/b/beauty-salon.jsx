import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-cmzcb8o.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="q-cmzcb8o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:beauty-salon"} {...others} />);
}

export default Component;
