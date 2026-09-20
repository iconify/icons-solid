import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fiw_u92lf.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="fiw_u92lf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:skull-1-solid"} {...others} />);
}

export default Component;
