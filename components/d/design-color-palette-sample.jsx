import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zl8i0-bnz.css';
import '../../css/c/cnn8c6pbg.css';
import '../../css/d/donjoukqx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zl8i0-bnz"/><path class="cnn8c6pbg"/><path class="donjoukqx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:design-color-palette-sample"} {...others} />);
}

export default Component;
