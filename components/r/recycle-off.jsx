import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cw3qqeyqu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cw3qqeyqu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:recycle-off"} {...others} />);
}

export default Component;
