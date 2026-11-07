import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nfzicbcse.css';
import '../../css/f/fq3gxbred.css';
import '../../css/e/ec8ku5buv.css';
import '../../css/w/wr7qp9b-e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nfzicbcse"/><path class="fq3gxbred"/><path class="ec8ku5buv"/><path class="wr7qp9b-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bag-5-bold-duotone"} {...others} />);
}

export default Component;
