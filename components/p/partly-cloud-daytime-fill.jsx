import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yhvnvmb3v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yhvnvmb3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:partly-cloud-daytime-fill"} {...others} />);
}

export default Component;
