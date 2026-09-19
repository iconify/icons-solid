import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y0g6n4nwz.css';
import '../../css/z/zn9kz8x1i.css';
import '../../css/f/f2zhg8brw.css';
import '../../css/l/lza6dyowd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="y0g6n4nwz"/><path class="zn9kz8x1i"/><path class="f2zhg8brw"/><path class="lza6dyowd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:document-multiple-02"} {...others} />);
}

export default Component;
