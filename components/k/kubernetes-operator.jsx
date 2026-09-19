import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/shykeihid.css';
import '../../css/o/ot-x0gcwc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="shykeihid"/><path class="ot-x0gcwc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:kubernetes-operator"} {...others} />);
}

export default Component;
