import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/amn_b-_3e.css';
import '../../css/n/ncz70n-in.css';
import '../../css/j/juiythkhp.css';
import '../../css/k/k39h0tblb.css';
import '../../css/y/y6fqwjbfy.css';
import '../../css/m/m-l90ob2o.css';
import '../../css/l/l_8clz36z.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="amn_b-_3e"/><path class="ncz70n-in"/><path class="juiythkhp"/><path class="k39h0tblb"/><path class="y6fqwjbfy"/><path class="m-l90ob2o"/><path class="l_8clz36z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:person-light-skin-tone-blond-hair"} {...others} />);
}

export default Component;
