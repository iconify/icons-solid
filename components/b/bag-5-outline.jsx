import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g26s6eb5h.css';
import '../../css/z/zwlaz0b-f.css';
import '../../css/q/q3o58pbau.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g26s6eb5h"/><path class="zwlaz0b-f"/><path clip-rule="evenodd" class="q3o58pbau"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bag-5-outline"} {...others} />);
}

export default Component;
