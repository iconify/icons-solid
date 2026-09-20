import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xgi_pg35v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xgi_pg35v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:power-off-sharp-fill"} {...others} />);
}

export default Component;
