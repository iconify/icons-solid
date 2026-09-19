import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mkmq48bsn.css';
import '../../css/q/qd1ggccdo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mkmq48bsn"/><path class="qd1ggccdo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:share-box-outline"} {...others} />);
}

export default Component;
