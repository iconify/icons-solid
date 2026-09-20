import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cmwnk3p6s.css';
import '../../css/u/uar01lb2v.css';
import '../../css/p/p2sew--qs.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cmwnk3p6s"/><path clip-rule="evenodd" class="uar01lb2v"/><path class="p2sew--qs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:commanda-cohere"} {...others} />);
}

export default Component;
