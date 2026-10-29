import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q97ltfs3e.css';
import '../../css/j/jpgvtb6sd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q97ltfs3e wm-k"/><path class="jpgvtb6sd wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:angry"} {...others} />);
}

export default Component;
