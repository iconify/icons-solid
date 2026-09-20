import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fry-ov_8f.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="fry-ov_8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:text-align-justify"} {...others} />);
}

export default Component;
