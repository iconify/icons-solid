import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xg-3gzbhe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xg-3gzbhe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:unlock-check"} {...others} />);
}

export default Component;
