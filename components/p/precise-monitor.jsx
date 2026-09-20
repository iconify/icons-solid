import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xpo_bc98z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xpo_bc98z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:precise-monitor"} {...others} />);
}

export default Component;
