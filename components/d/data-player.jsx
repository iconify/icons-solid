import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yx8s2qyca.css';
import '../../css/x/x9g2eubxz.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="yx8s2qyca"/><path class="x9g2eubxz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:data-player"} {...others} />);
}

export default Component;
