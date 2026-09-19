import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/obwtl28pf.css';
import '../../css/k/keushub5r.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="obwtl28pf"/><path class="keushub5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:print"} {...others} />);
}

export default Component;
