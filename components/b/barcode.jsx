import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u-wcl9bei.css';
import '../../css/a/aranxlsbw.css';
import '../../css/o/of4wwqxia.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u-wcl9bei"/><path class="aranxlsbw"/><path class="of4wwqxia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:barcode"} {...others} />);
}

export default Component;
