import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ovde4bbjw.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="ovde4bbjw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:dumbbell"} {...others} />);
}

export default Component;
