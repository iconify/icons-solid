import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dmgvypbtk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dmgvypbtk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-regular:face-grin-tongue-squint"} {...others} />);
}

export default Component;
