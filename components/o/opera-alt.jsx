import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xvesc-9me.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xvesc-9me"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uit:opera-alt"} {...others} />);
}

export default Component;
