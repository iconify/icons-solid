import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kszgptbfk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="kszgptbfk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:sidebyside-solid"} {...others} />);
}

export default Component;
