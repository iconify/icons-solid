import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_b06wvdy.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="c_b06wvdy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:eaved-gabled-shelter-with-fireplace-and-chimney"} {...others} />);
}

export default Component;
