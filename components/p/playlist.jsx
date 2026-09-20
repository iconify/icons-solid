import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fu31aqbef.css';
import '../../css/s/s1mar9bdi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fu31aqbef"/><path class="s1mar9bdi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:playlist"} {...others} />);
}

export default Component;
