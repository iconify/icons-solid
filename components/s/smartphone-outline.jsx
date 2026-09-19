import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yeeel25yq.css';
import '../../css/l/lx933dbek.css';
import '../../css/d/dzzm5i91a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yeeel25yq"/><circle class="lx933dbek"/><path class="dzzm5i91a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:smartphone-outline"} {...others} />);
}

export default Component;
