import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o-z1hcbtj.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="o-z1hcbtj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:pool-ladder"} {...others} />);
}

export default Component;
