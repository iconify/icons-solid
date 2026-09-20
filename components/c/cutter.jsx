import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qvbbl6ipz.css';

const viewBox = {"width":24,"height":24,"left":-1.5,"top":-2};
const content = `<path class="qvbbl6ipz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:cutter"} {...others} />);
}

export default Component;
