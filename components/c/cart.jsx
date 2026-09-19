import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0s3pwbiu.css';
import '../../css/f/f6tq_mbll.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="a0s3pwbiu"/><path class="f6tq_mbll"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:cart"} {...others} />);
}

export default Component;
