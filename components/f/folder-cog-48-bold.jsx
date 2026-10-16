import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vrw5zccqv.css';
import '../../css/x/xvodhac-f.css';
import '../../css/l/lg3yrcb-s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vrw5zccqv"/><path class="xvodhac-f"/><path class="lg3yrcb-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:folder-cog-48-bold"} {...others} />);
}

export default Component;
