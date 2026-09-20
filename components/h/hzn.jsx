import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ihmgd-bza.css';
import '../../css/x/x9845bcgi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ihmgd-bza"/><path class="x9845bcgi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:hzn"} {...others} />);
}

export default Component;
