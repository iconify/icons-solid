import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wkovyh8fx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wkovyh8fx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:stop-circle"} {...others} />);
}

export default Component;
