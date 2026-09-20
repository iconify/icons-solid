import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bd4rf3b7g.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-3};
const content = `<path class="bd4rf3b7g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:mountain-f"} {...others} />);
}

export default Component;
