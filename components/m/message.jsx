import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pcomewbtu.css';
import '../../css/m/mpg7plbez.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-secondary-layer pcomewbtu"/><path class="duoicon-primary-layer mpg7plbez"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:message"} {...others} />);
}

export default Component;
