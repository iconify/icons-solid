import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umhq261qv.css';
import '../../css/g/gf_wrnomr.css';
import '../../css/p/p5jrx9s3b.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="umhq261qv"/><path class="gf_wrnomr"/><path class="p5jrx9s3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:key-48-bold"} {...others} />);
}

export default Component;
