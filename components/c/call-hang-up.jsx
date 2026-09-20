import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fv1-teoia.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="fv1-teoia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:call-hang-up"} {...others} />);
}

export default Component;
