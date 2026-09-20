import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cj8o_xb5j.css';
import '../../css/m/mqstf9bxa.css';
import '../../css/x/xlvhy0vyx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cj8o_xb5j"/><path class="mqstf9bxa"/><path class="xlvhy0vyx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:web-grid"} {...others} />);
}

export default Component;
