import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uk3yrs-uy.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="uk3yrs-uy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:box-light-vertical-horizontal-stipple"} {...others} />);
}

export default Component;
