import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k-gl1e30s.css';

const viewBox = {"width":961,"height":1024};
const content = `<path class="k-gl1e30s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:yiiframework"} {...others} />);
}

export default Component;
