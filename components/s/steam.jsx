import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zuvs13buz.css';
import '../../css/i/imty9-5fx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zuvs13buz"/><path class="imty9-5fx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:steam"} {...others} />);
}

export default Component;
