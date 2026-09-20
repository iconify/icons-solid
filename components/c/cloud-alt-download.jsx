import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wc2fcx.css';
import '../../css/j/jyt2ef.css';
import '../../css/s/so-from-60.css';
import '../../css/d/d-es1ygv.css';
import '../../css/d/d-wrh7yw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wc2fcx"/><path class="jyt2ef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:cloud-alt-download"} {...others} />);
}

export default Component;
