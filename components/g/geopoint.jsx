import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dfc3txbai.css';
import '../../css/f/f43eqhbwn.css';
import '../../css/y/yx6wxur-h.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dfc3txbai"/><circle class="f43eqhbwn"/><path clip-rule="evenodd" class="yx6wxur-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:geopoint"} {...others} />);
}

export default Component;
