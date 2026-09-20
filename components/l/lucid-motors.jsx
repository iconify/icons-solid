import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d086xn42g.css';

const viewBox = {"width":77.258,"height":4.867};
const content = `<path class="d086xn42g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:lucid-motors"} {...others} />);
}

export default Component;
