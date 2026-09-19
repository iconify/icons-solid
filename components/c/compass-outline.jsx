import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wckr9kb1z.css';
import '../../css/a/a4g3bmbli.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wckr9kb1z"/><path class="a4g3bmbli"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:compass-outline"} {...others} />);
}

export default Component;
