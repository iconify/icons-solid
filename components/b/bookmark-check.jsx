import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/unmjk69jp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="unmjk69jp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:bookmark-check"} {...others} />);
}

export default Component;
