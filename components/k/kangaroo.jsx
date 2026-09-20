import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ltbzzrb2k.css';
import '../../css/g/gpgbi6l-o.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/a/ac35skgli.css';
import '../../css/j/jutxqvbfn.css';
import '../../css/p/p2odtd8hx.css';
import '../../css/z/zxg9bx7dz.css';
import '../../css/p/pgb36lbhj.css';
import '../../css/f/fr07yhbep.css';
import '../../css/s/szjh-pbtn.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ltbzzrb2k"/><path class="gpgbi6l-o"/><g class="brzn_0bpr"><path class="ac35skgli"/><path class="jutxqvbfn"/><path class="p2odtd8hx"/><path class="zxg9bx7dz"/><path class="pgb36lbhj"/><path class="fr07yhbep"/><path class="szjh-pbtn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:kangaroo"} {...others} />);
}

export default Component;
