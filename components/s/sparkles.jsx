import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bjw3e_ued.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bjw3e_ued"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:sparkles"} {...others} />);
}

export default Component;
