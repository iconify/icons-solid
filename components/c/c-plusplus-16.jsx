import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dxd599tnq.css';
import '../../css/t/t2xzwzjmd.css';
import '../../css/q/qvr6hvb2x.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="dxd599tnq"/><path class="t2xzwzjmd"/><path class="qvr6hvb2x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nonicons:c-plusplus-16"} {...others} />);
}

export default Component;
