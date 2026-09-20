import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mbt3_ecay.css';
import '../../css/a/awy61ibgu.css';
import '../../css/y/yln89_oby.css';

const viewBox = {"width":300,"height":331.399};
const content = `<path clip-rule="evenodd" class="mbt3_ecay"/><path clip-rule="evenodd" class="awy61ibgu"/><path clip-rule="evenodd" class="yln89_oby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:eps"} {...others} />);
}

export default Component;
