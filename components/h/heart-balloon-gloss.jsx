import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kpjo1kt9u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kpjo1kt9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:heart-balloon-gloss"} {...others} />);
}

export default Component;
