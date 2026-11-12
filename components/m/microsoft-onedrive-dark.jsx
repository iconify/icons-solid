import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gzxu6cbem.css';
import '../../css/y/y5x_dib_i.css';
import '../../css/b/b6edkyxdc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gzxu6cbem"/><path class="y5x_dib_i"/><path class="b6edkyxdc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-onedrive-dark"} {...others} />);
}

export default Component;
