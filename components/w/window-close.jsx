import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gks8du_si.css';
import '../../css/s/sceipoxjy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gks8du_si"/><path class="sceipoxjy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:window-close"} {...others} />);
}

export default Component;
