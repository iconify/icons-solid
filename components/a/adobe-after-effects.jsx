import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nvdq-vb2k.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="nvdq-vb2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:adobe-after-effects"} {...others} />);
}

export default Component;
