import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k93zsxbzs.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="k93zsxbzs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-riding-jetski-on-water"} {...others} />);
}

export default Component;
