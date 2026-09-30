import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bwgw36hjy.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="bwgw36hjy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:at-stroke-16"} {...others} />);
}

export default Component;
