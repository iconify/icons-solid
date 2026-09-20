import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_3xcqb6y.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="c_3xcqb6y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:arrow-left-small-solid"} {...others} />);
}

export default Component;
