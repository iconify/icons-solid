import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jv2c330tb.css';
import '../../css/o/of89spbxw.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="jv2c330tb"/><path class="of89spbxw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:phone-scan-qr-code-1"} {...others} />);
}

export default Component;
