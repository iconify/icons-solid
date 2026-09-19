import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/beb8cn1fv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="beb8cn1fv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:brain-filled"} {...others} />);
}

export default Component;
