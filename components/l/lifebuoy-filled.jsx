import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wiq5p1cvd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wiq5p1cvd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:lifebuoy-filled"} {...others} />);
}

export default Component;
