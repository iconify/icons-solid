import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dmm_ovqpx.css';
import '../../css/b/bem6xnbwz.css';
import '../../css/y/yx9j9-c-k.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dmm_ovqpx"/><path clip-rule="evenodd" class="bem6xnbwz"/><path class="yx9j9-c-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sort-by-alphabet-bold-duotone"} {...others} />);
}

export default Component;
