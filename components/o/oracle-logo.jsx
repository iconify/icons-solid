import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fngcuz2gm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fngcuz2gm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:oracle-logo"} {...others} />);
}

export default Component;
