import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/efahihb3e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="efahihb3e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:end-call-rounded-bold"} {...others} />);
}

export default Component;
