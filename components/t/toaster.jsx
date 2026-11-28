import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jj1dmuzbk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jj1dmuzbk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:toaster"} {...others} />);
}

export default Component;
