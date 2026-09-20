import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rz3d-2pmb.css';
import '../../css/s/spm3uswvo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rz3d-2pmb"/><path class="spm3uswvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:edit"} {...others} />);
}

export default Component;
