import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h2zbhc84i.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="h2zbhc84i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:flash-3-solid"} {...others} />);
}

export default Component;
