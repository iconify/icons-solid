import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufpbpac8b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ufpbpac8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:plug-3-fill"} {...others} />);
}

export default Component;
