import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l6-_lr_vw.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="l6-_lr_vw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:skill-level-basic"} {...others} />);
}

export default Component;
