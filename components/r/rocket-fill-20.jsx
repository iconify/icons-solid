import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kx95jbbja.css';
import '../../css/x/xcxa9bb7a.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kx95jbbja"/><path class="xcxa9bb7a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:rocket-fill-20"} {...others} />);
}

export default Component;
