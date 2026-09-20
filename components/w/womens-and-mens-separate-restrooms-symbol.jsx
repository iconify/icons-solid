import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/amsqombxb.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="amsqombxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:womens-and-mens-separate-restrooms-symbol"} {...others} />);
}

export default Component;
