import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/s/s2lghyb2l.css';
import '../../css/l/ls30h7cmn.css';
import '../../css/g/g3pw3npno.css';
import '../../css/x/xl3fa-blb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="s2lghyb2l"/><path class="ls30h7cmn"/><path class="g3pw3npno"/><path class="xl3fa-blb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:apple-ios-logo-2"} {...others} />);
}

export default Component;
