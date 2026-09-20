import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iolxe8bdj.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="iolxe8bdj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:justice-hammer"} {...others} />);
}

export default Component;
