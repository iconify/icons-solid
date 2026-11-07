import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xre4jslvu.css';
import '../../css/w/wq4oxm77o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xre4jslvu"/><path class="wq4oxm77o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:test-tube-bold"} {...others} />);
}

export default Component;
