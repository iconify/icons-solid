import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c-15vo-zo.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="c-15vo-zo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:bicycle-in-garage"} {...others} />);
}

export default Component;
