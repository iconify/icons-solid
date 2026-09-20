import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rjl_jbb4y.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-5};
const content = `<path class="rjl_jbb4y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:signal"} {...others} />);
}

export default Component;
