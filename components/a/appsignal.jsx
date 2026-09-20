import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uyq_t3ubt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uyq_t3ubt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:appsignal"} {...others} />);
}

export default Component;
