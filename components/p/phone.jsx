import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a8zh9f3rk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a8zh9f3rk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:phone"} {...others} />);
}

export default Component;
