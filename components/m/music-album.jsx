import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/j/jqu7zwbyi.css';
import '../../css/x/x5sborb5g.css';
import '../../css/z/zmi2ynitk.css';
import '../../css/w/wo8mbvbvw.css';
import '../../css/c/c0xretbrj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="jqu7zwbyi"/><path class="x5sborb5g"/><path class="zmi2ynitk"/><circle class="wo8mbvbvw"/><circle class="c0xretbrj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:music-album"} {...others} />);
}

export default Component;
