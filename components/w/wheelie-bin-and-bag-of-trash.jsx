import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pwzg04bbe.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="pwzg04bbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:wheelie-bin-and-bag-of-trash"} {...others} />);
}

export default Component;
