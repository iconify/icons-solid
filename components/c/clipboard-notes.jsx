import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mlgp2b63v.css';
import '../../css/x/x5yrrkbss.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="mlgp2b63v"/><path class="x5yrrkbss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:clipboard-notes"} {...others} />);
}

export default Component;
