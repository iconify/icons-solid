import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/loz5rn4-x.css';
import '../../css/m/m9ropn74r.css';
import '../../css/z/zmcrrdb9p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="loz5rn4-x"/><path class="m9ropn74r"/><path class="zmcrrdb9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:chevrons-up-down"} {...others} />);
}

export default Component;
