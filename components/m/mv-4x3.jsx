import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nnmkx_dzk.css';
import '../../css/z/z9mmmhbcr.css';
import '../../css/c/ccsgx9gax.css';
import '../../css/r/rvayqzbpx.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="nnmkx_dzk"/><path class="z9mmmhbcr"/><circle class="ccsgx9gax"/><circle class="rvayqzbpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:mv-4x3"} {...others} />);
}

export default Component;
