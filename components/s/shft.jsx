import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hcujsn75d.css';
import '../../css/a/a3rqikbuq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hcujsn75d"/><path class="a3rqikbuq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:shft"} {...others} />);
}

export default Component;
