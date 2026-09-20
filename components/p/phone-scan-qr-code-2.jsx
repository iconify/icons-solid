import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oz40oqe3o.css';
import '../../css/u/umi-nhb8c.css';
import '../../css/n/ntuki9b4l.css';
import '../../css/n/nxyt7wepj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="oz40oqe3o"/><path class="umi-nhb8c"/><path class="ntuki9b4l"/><path class="nxyt7wepj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:phone-scan-qr-code-2"} {...others} />);
}

export default Component;
