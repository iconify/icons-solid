import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pgnn-dbdc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pgnn-dbdc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:wifi-off-bold"} {...others} />);
}

export default Component;
