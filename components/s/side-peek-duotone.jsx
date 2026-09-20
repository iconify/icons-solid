import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xq_t1dwcz.css';
import '../../css/d/deu3b0kil.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xq_t1dwcz"/><path class="deu3b0kil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:side-peek-duotone"} {...others} />);
}

export default Component;
