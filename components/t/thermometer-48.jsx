import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zyzjbf5oz.css';
import '../../css/b/bs8u9-bib.css';
import '../../css/d/dz2xsntoo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zyzjbf5oz"/><path class="bs8u9-bib"/><path class="dz2xsntoo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thermometer-48"} {...others} />);
}

export default Component;
