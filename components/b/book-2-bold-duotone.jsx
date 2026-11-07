import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sdgjn765p.css';
import '../../css/g/gdwttsbnn.css';
import '../../css/q/qqtleebkg.css';
import '../../css/n/n-o51-mex.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sdgjn765p"/><path class="gdwttsbnn"/><path class="qqtleebkg"/><path class="n-o51-mex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:book-2-bold-duotone"} {...others} />);
}

export default Component;
