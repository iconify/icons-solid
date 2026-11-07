import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pg3heibao.css';
import '../../css/i/i9yzznx8e.css';
import '../../css/t/t1r1agbba.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pg3heibao"/><path class="i9yzznx8e"/><path class="t1r1agbba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bag-smile-bold-duotone"} {...others} />);
}

export default Component;
