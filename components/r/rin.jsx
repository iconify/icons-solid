import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u0hziwb9d.css';
import '../../css/x/x47f5ib6e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u0hziwb9d"/><path class="x47f5ib6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:rin"} {...others} />);
}

export default Component;
