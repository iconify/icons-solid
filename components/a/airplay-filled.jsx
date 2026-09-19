import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vagjwfb3n.css';
import '../../css/b/ba21eebdo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vagjwfb3n"/><path class="ba21eebdo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:airplay-filled"} {...others} />);
}

export default Component;
