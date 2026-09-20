import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xvq8v1bjv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xvq8v1bjv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:threads-fill"} {...others} />);
}

export default Component;
