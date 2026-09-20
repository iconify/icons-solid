import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o-c2jjncm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o-c2jjncm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:code-circle-2-filled"} {...others} />);
}

export default Component;
