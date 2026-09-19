import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x4zkg1rsf.css';
import '../../css/e/eglypf0vu.css';
import '../../css/o/o6ihie1hh.css';
import '../../css/p/pye4v2rbu.css';
import '../../css/n/ngm3cbbat.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x4zkg1rsf"/><path class="eglypf0vu"/><path class="o6ihie1hh"/><path class="pye4v2rbu"/><path class="ngm3cbbat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:asset-inventory"} {...others} />);
}

export default Component;
