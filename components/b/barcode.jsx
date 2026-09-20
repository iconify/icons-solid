import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kgz_ywmly.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="kgz_ywmly"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:barcode"} {...others} />);
}

export default Component;
