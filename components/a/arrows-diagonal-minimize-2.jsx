import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s-8tu9-dm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s-8tu9-dm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrows-diagonal-minimize-2"} {...others} />);
}

export default Component;
