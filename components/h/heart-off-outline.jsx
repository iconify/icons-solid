import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ggt--tbja.css';
import '../../css/t/thqtvsbbp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ggt--tbja"/><path clip-rule="evenodd" class="thqtvsbbp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:heart-off-outline"} {...others} />);
}

export default Component;
