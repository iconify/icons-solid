import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ti42oubap.css';
import '../../css/r/rjaz92bbn.css';

const viewBox = {"width":351.46,"height":258.785,"left":35.188,"top":31.512};
const content = `<path class="ti42oubap"/><path class="rjaz92bbn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:nvidia-light"} {...others} />);
}

export default Component;
