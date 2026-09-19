import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a74gq_b1a.css';
import '../../css/t/t-u8gdf5z.css';
import '../../css/f/f-pr0_bmp.css';
import '../../css/v/v9ndywb5i.css';
import '../../css/l/lt8pu2bcd.css';
import '../../css/x/xd0pxdbra.css';
import '../../css/o/ovxiiebjn.css';
import '../../css/z/zzzv98mro.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="a74gq_b1a"/><path class="t-u8gdf5z"/><path class="f-pr0_bmp"/><path class="v9ndywb5i"/><path class="lt8pu2bcd"/><path class="xd0pxdbra"/><path class="ovxiiebjn"/><path class="zzzv98mro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:matplotlib-wordmark"} {...others} />);
}

export default Component;
