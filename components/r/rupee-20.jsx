import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pec648bzl.css';
import '../../css/i/i4lld7tyb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pec648bzl"/><path class="i4lld7tyb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rupee-20"} {...others} />);
}

export default Component;
