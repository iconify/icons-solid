import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/adhxuu-rl.css';
import '../../css/l/l520-dkdu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="adhxuu-rl"/><path class="l520-dkdu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:pinejs"} {...others} />);
}

export default Component;
