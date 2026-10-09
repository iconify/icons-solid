import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gob-ytbgf.css';
import '../../css/n/nb2fp75rv.css';
import '../../css/u/ubixxqbpx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gob-ytbgf"/><path class="nb2fp75rv"/><path class="ubixxqbpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:small-wind-turbine-20"} {...others} />);
}

export default Component;
