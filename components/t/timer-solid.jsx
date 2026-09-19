import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i2qapdb-t.css';
import '../../css/q/qdsfr5okm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i2qapdb-t"/><path clip-rule="evenodd" class="qdsfr5okm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:timer-solid"} {...others} />);
}

export default Component;
