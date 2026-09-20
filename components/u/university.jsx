import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oi9jj-4wg.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="oi9jj-4wg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:university"} {...others} />);
}

export default Component;
