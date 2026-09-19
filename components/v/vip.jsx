import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkmbsbbqu.css';
import '../../css/k/kb1ytkvcz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jkmbsbbqu"/><path class="kb1ytkvcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:vip"} {...others} />);
}

export default Component;
