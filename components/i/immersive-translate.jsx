import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/darj4dbtm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="darj4dbtm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:immersive-translate"} {...others} />);
}

export default Component;
