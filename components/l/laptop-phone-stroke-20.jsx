import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kn2sbbcpi.css';
import '../../css/a/aevwtdbpu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kn2sbbcpi"/><path class="aevwtdbpu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:laptop-phone-stroke-20"} {...others} />);
}

export default Component;
