import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qqix6e-9e.css';
import '../../css/r/rauwxcb1r.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qqix6e-9e"/><path class="rauwxcb1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:volume-block-storage"} {...others} />);
}

export default Component;
