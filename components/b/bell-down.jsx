import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gzx2ml0ot.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gzx2ml0ot"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:bell-down"} {...others} />);
}

export default Component;
