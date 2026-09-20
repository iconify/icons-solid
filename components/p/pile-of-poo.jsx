import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/epvjv999q.css';
import '../../css/s/s3o1n7b3h.css';
import '../../css/z/zzp02ebzm.css';
import '../../css/i/iulsg4y1u.css';
import '../../css/m/mgrq1f6gp.css';
import '../../css/f/fkevdpbng.css';
import '../../css/a/aueiftbzw.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="epvjv999q"/><path class="s3o1n7b3h"/><ellipse class="zzp02ebzm"/><ellipse class="iulsg4y1u"/><path class="mgrq1f6gp"/><path class="fkevdpbng"/><path class="aueiftbzw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:pile-of-poo"} {...others} />);
}

export default Component;
