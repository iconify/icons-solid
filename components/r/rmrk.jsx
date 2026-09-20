import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xr37i9x0n.css';
import '../../css/g/g06w--byr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xr37i9x0n"/><path class="g06w--byr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:rmrk"} {...others} />);
}

export default Component;
