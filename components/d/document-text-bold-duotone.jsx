import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i4w_uybke.css';
import '../../css/g/gqzhmwbnh.css';
import '../../css/n/nrm_facaf.css';
import '../../css/j/jhtqjy4tu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i4w_uybke"/><path class="gqzhmwbnh"/><path class="nrm_facaf"/><path class="jhtqjy4tu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:document-text-bold-duotone"} {...others} />);
}

export default Component;
