import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/amn_b-_3e.css';
import '../../css/g/g7cwwwv6u.css';
import '../../css/q/qe8oeoblu.css';
import '../../css/z/zusck3p4q.css';
import '../../css/u/uxn--ybvw.css';
import '../../css/p/p7bt85l8y.css';
import '../../css/j/jqtbdaclu.css';
import '../../css/o/od_-5jbjr.css';
import '../../css/u/uaxq5zyrm.css';
import '../../css/a/ae6u8jb5b.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="amn_b-_3e"/><path class="g7cwwwv6u"/><path class="qe8oeoblu"/><path class="zusck3p4q"/><path class="uxn--ybvw"/><path class="p7bt85l8y"/><path class="jqtbdaclu"/><path class="od_-5jbjr"/><path class="uaxq5zyrm"/><path class="ae6u8jb5b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:woman-beard"} {...others} />);
}

export default Component;
