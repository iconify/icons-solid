import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v76j5s1uj.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="v76j5s1uj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:pin-pad-with-ruble"} {...others} />);
}

export default Component;
