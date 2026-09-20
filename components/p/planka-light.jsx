import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y245uab7e.css';
import '../../css/z/ziuppeksn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y245uab7e"/><path class="ziuppeksn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:planka-light"} {...others} />);
}

export default Component;
