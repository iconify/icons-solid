import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n11l6w7ir.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="n11l6w7ir"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:staircase"} {...others} />);
}

export default Component;
