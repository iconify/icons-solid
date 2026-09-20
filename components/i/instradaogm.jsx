import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w9ud5h62v.css';
import '../../css/d/dy7wyibqi.css';
import '../../css/c/c1bx6kbkm.css';
import '../../css/p/pfddqgk7j.css';

const viewBox = {"width":512,"height":512};
const content = `<ellipse class="w9ud5h62v"/><path class="dy7wyibqi"/><path class="c1bx6kbkm"/><path class="pfddqgk7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:instradaogm"} {...others} />);
}

export default Component;
