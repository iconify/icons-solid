import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gk68cabhr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gk68cabhr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:discount-percent-cutout"} {...others} />);
}

export default Component;
