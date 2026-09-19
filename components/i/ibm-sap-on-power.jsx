import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vn3c1ccis.css';
import '../../css/c/c5ym2eb1u.css';
import '../../css/k/kfc99jb4u.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vn3c1ccis"/><circle class="c5ym2eb1u"/><path class="kfc99jb4u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-sap-on-power"} {...others} />);
}

export default Component;
