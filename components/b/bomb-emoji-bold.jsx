import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xl-jarb6g.css';
import '../../css/c/cge_0eb5m.css';
import '../../css/d/db1p10rux.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xl-jarb6g"/><path clip-rule="evenodd" class="cge_0eb5m"/><path class="db1p10rux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bomb-emoji-bold"} {...others} />);
}

export default Component;
