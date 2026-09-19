import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c18x4bbih.css';

const viewBox = {"width":432,"height":512};
const content = `<path class="c18x4bbih"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:coffee-hot"} {...others} />);
}

export default Component;
