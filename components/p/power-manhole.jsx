import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dl5jfab4x.css';
import '../../css/a/a6b9_ibtc.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="dl5jfab4x"/><path class="a6b9_ibtc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:power-manhole"} {...others} />);
}

export default Component;
