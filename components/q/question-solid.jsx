import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ia85dv29k.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="ia85dv29k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:question-solid"} {...others} />);
}

export default Component;
