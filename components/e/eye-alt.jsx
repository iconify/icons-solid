import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d0u5bhb-g.css';
import '../../css/x/x5shryb9q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d0u5bhb-g"/><path class="x5shryb9q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:eye-alt"} {...others} />);
}

export default Component;
