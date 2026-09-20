import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ocxtnncco.css';
import '../../css/f/fb07yqbmq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ocxtnncco"/><path class="fb07yqbmq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:tag"} {...others} />);
}

export default Component;
