import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rnii4hccr.css';
import '../../css/f/f345gcb6t.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="rnii4hccr"/><path class="f345gcb6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:tennisball-outline"} {...others} />);
}

export default Component;
