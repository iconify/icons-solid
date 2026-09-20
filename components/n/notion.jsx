import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mdg_z8g7j.css';
import '../../css/m/m3bb8qa6g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mdg_z8g7j"/><path class="m3bb8qa6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:notion"} {...others} />);
}

export default Component;
