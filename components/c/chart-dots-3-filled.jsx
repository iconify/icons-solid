import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/ss7jp2b5s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ss7jp2b5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:chart-dots-3-filled"} {...others} />);
}

export default Component;
