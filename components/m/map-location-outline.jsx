import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ocdgddc2f.css';
import '../../css/w/wk87j1b9c.css';
import '../../css/i/itu3zmsxh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ocdgddc2f"/><path clip-rule="evenodd" class="wk87j1b9c"/><path class="itu3zmsxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:map-location-outline"} {...others} />);
}

export default Component;
