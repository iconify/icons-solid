import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cqle1m17k.css';
import '../../css/d/dw1rn2v6s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cqle1m17k"/><path class="dw1rn2v6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:cloud-external-ip-addresses"} {...others} />);
}

export default Component;
