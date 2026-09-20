import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n7rxfh69l.css';
import '../../css/f/f1o3zmzsp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="n7rxfh69l"/><path class="f1o3zmzsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:design-color-brush-paint"} {...others} />);
}

export default Component;
