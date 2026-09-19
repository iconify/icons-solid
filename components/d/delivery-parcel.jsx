import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wjv214_sf.css';
import '../../css/j/j87t2qbsw.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="wjv214_sf"/><path class="j87t2qbsw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:delivery-parcel"} {...others} />);
}

export default Component;
