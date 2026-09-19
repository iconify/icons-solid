import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ern-01bxx.css';
import '../../css/r/rug5b1b1t.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="ern-01bxx"/><path class="rug5b1b1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:route"} {...others} />);
}

export default Component;
