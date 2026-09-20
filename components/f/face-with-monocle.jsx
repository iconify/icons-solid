import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s6iikjgcv.css';
import '../../css/m/m07ft36jh.css';
import '../../css/z/zbhq0bwlo.css';
import '../../css/h/ht011mxbb.css';
import '../../css/y/yzpdofb_c.css';
import '../../css/h/h9fdzacrs.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="s6iikjgcv"/><path class="m07ft36jh"/><path class="zbhq0bwlo"/><path class="ht011mxbb"/><circle class="yzpdofb_c"/><path class="h9fdzacrs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:face-with-monocle"} {...others} />);
}

export default Component;
