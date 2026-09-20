import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m2wzvt0ia.css';
import '../../css/x/x5_n2lbpi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m2wzvt0ia"/><path class="x5_n2lbpi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:envelope-duotone"} {...others} />);
}

export default Component;
