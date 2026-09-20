import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ekx1x_bqx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ekx1x_bqx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:attic-assets-dark"} {...others} />);
}

export default Component;
