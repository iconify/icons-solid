import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u0s5l9few.css';
import '../../css/y/ywghsebrp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u0s5l9few"/><path class="ywghsebrp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"grommet-icons:google"} {...others} />);
}

export default Component;
