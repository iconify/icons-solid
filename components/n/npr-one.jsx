import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w2qqdgbpq.css';
import '../../css/b/br20uj0za.css';
import '../../css/x/xoju9kbwz.css';
import '../../css/c/c1i9a_s6v.css';
import '../../css/i/izwhq371e.css';
import '../../css/t/tzdqv4zfa.css';
import '../../css/a/azsbrybsa.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w2qqdgbpq"/><path class="br20uj0za"/><path class="xoju9kbwz"/><path class="c1i9a_s6v"/><path class="izwhq371e"/><path class="tzdqv4zfa"/><path class="azsbrybsa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:npr-one"} {...others} />);
}

export default Component;
