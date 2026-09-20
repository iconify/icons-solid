import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xsldmpb3s.css';
import '../../css/f/f9o_g2bpv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xsldmpb3s"/><path class="f9o_g2bpv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:content-files-folder-open"} {...others} />);
}

export default Component;
