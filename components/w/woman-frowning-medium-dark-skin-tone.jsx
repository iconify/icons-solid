import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lc37kt10h.css';
import '../../css/y/ynkczvbqb.css';
import '../../css/g/g2y6b8btf.css';
import '../../css/b/b3xezr7mk.css';
import '../../css/u/ubef5lbps.css';
import '../../css/m/m2f4z0b-u.css';
import '../../css/b/b2jinnpae.css';
import '../../css/s/srcf0y6ld.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="lc37kt10h"/><path class="ynkczvbqb"/><path class="g2y6b8btf"/><path class="b3xezr7mk"/><path class="ubef5lbps"/><path class="m2f4z0b-u"/><path class="b2jinnpae"/><path class="srcf0y6ld"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:woman-frowning-medium-dark-skin-tone"} {...others} />);
}

export default Component;
