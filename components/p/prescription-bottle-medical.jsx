import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tukrrkb1p.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="tukrrkb1p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:prescription-bottle-medical"} {...others} />);
}

export default Component;
