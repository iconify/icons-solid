import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wui9vd-9u.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-3};
const content = `<path class="wui9vd-9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:mountain"} {...others} />);
}

export default Component;
