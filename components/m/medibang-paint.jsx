import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ew-ng2h3g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ew-ng2h3g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:medibang-paint"} {...others} />);
}

export default Component;
