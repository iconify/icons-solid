import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qw6s-92eq.css';

const viewBox = {"width":898,"height":1024};
const content = `<path class="qw6s-92eq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:thermometeralt"} {...others} />);
}

export default Component;
