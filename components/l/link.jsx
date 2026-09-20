import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_h9hlbzc.css';

const viewBox = {"width":24,"height":24,"left":-3,"top":-3};
const content = `<path class="c_h9hlbzc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:link"} {...others} />);
}

export default Component;
