import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c33ymtb-m.css';

const viewBox = {"width":464,"height":488};
const content = `<path class="c33ymtb-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:creative-commons"} {...others} />);
}

export default Component;
