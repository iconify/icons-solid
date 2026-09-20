import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/i/i2iz81xau.css';
import '../../css/y/ywuzefbfo.css';
import '../../css/z/zbjo2in3u.css';
import '../../css/b/brt2ttvoc.css';
import '../../css/h/h7qa06noh.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="i2iz81xau"/><path class="ywuzefbfo"/><path class="zbjo2in3u"/><path class="brt2ttvoc"/><path class="h7qa06noh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:crop-expand"} {...others} />);
}

export default Component;
