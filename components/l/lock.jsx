import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z2977i58y.css';
import '../../css/r/rx0zx5bsb.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="z2977i58y"/><path class="rx0zx5bsb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:lock"} {...others} />);
}

export default Component;
