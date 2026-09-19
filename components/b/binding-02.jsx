import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gq_plobvb.css';
import '../../css/x/xidavd7kn.css';
import '../../css/r/rfqd2w1ya.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gq_plobvb"/><path class="xidavd7kn"/><path class="rfqd2w1ya"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:binding-02"} {...others} />);
}

export default Component;
