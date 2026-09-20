import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h3vrxdqka.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="h3vrxdqka"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:hierarchy-14"} {...others} />);
}

export default Component;
