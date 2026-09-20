import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hlvk4dsgc.css';
import '../../css/c/cp3aa4bji.css';
import '../../css/k/ks7p16bem.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hlvk4dsgc"/><rect class="cp3aa4bji"/><rect class="ks7p16bem"/><rect class="cp3aa4bji"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:pagination-duotone"} {...others} />);
}

export default Component;
