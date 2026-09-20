import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nc8ov__gv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nc8ov__gv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uit:grid"} {...others} />);
}

export default Component;
