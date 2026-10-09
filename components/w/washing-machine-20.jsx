import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l1middb0q.css';
import '../../css/b/b_86fhc7i.css';
import '../../css/n/nwv555bhd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="l1middb0q"/><path class="b_86fhc7i"/><path class="nwv555bhd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:washing-machine-20"} {...others} />);
}

export default Component;
