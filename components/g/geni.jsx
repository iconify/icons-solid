import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i4n5wplky.css';
import '../../css/o/ow091_bxo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="i4n5wplky"/><path class="ow091_bxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:geni"} {...others} />);
}

export default Component;
