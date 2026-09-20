import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qw8_37u4i.css';
import '../../css/a/ahhctfrrt.css';
import '../../css/a/a1fpm9bcj.css';
import '../../css/v/vlq7ubbqw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qw8_37u4i"/><path class="ahhctfrrt"/><path class="a1fpm9bcj"/><path class="vlq7ubbqw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:earpods-attention"} {...others} />);
}

export default Component;
