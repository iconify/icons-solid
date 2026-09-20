import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dggly8hlh.css';
import '../../css/r/r1dxseh_a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dggly8hlh"/><path class="r1dxseh_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:comments-solid"} {...others} />);
}

export default Component;
