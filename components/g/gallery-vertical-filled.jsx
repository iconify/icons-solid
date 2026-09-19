import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zmch1189h.css';
import '../../css/n/n_0uj0b-y.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="zmch1189h"/><path class="n_0uj0b-y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:gallery-vertical-filled"} {...others} />);
}

export default Component;
