import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nl15a80lp.css';
import '../../css/b/b-i2932jm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nl15a80lp"/><path class="b-i2932jm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:translation-clock-20"} {...others} />);
}

export default Component;
