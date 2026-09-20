import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/heinhra0j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="heinhra0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:object-scan"} {...others} />);
}

export default Component;
