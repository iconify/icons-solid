import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/af9zx_-vp.css';
import '../../css/x/xderynbbj.css';
import '../../css/o/oc-35l-aj.css';
import '../../css/o/ovvqimvbv.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="af9zx_-vp"/><path class="xderynbbj"/><path class="oc-35l-aj"/><path class="ovvqimvbv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nonicons:react-16"} {...others} />);
}

export default Component;
