import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gmkk7pd3f.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="gmkk7pd3f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:align-center-horizontal-solid"} {...others} />);
}

export default Component;
