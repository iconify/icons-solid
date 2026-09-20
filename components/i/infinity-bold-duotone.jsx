import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fbcwdowdw.css';
import '../../css/c/crhlcxbrn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fbcwdowdw"/><path class="crhlcxbrn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:infinity-bold-duotone"} {...others} />);
}

export default Component;
