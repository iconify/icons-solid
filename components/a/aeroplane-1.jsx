import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rf7me9nvx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rf7me9nvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:aeroplane-1"} {...others} />);
}

export default Component;
