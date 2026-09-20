import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/ssc1-xone.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ssc1-xone"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:id-filled"} {...others} />);
}

export default Component;
