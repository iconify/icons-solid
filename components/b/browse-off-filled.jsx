import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r36e_8bxp.css';
import '../../css/m/mfr2nesuy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r36e_8bxp"/><path class="mfr2nesuy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:browse-off-filled"} {...others} />);
}

export default Component;
