import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xfxo03bvz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xfxo03bvz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:chevron-compact-right"} {...others} />);
}

export default Component;
