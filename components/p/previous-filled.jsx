import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i0ar89bxd.css';
import '../../css/c/c7hrc7bds.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="i0ar89bxd"/><path class="c7hrc7bds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:previous-filled"} {...others} />);
}

export default Component;
