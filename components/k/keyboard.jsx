import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hlezn2bhh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hlezn2bhh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:keyboard"} {...others} />);
}

export default Component;
