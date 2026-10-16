import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zryaw4dka.css';
import '../../css/m/mxfeqjd4c.css';
import '../../css/y/y9mg2tbzu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zryaw4dka"/><path class="mxfeqjd4c"/><path class="y9mg2tbzu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:invoice-paid-48-bold"} {...others} />);
}

export default Component;
