import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mmkiuqb-h.css';
import '../../css/i/icpcz1bju.css';
import '../../css/g/gah67z6_i.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mmkiuqb-h"/><circle class="icpcz1bju"/><path class="gah67z6_i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:event-change"} {...others} />);
}

export default Component;
