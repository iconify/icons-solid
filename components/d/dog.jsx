import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/crq6d2swy.css';
import '../../css/z/z0_ytrr1q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="crq6d2swy"/><path class="z0_ytrr1q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:dog"} {...others} />);
}

export default Component;
