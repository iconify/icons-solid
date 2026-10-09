import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xg-os2b_i.css';
import '../../css/n/n3ia57pse.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xg-os2b_i"/><path class="n3ia57pse"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:clipboard-list-20"} {...others} />);
}

export default Component;
