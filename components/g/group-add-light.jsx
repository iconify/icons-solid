import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kydqj6hyx.css';
import '../../css/c/cobmfeb6t.css';
import '../../css/n/nj3ei-_1i.css';
import '../../css/p/pgd5l14zz.css';
import '../../css/g/gm7kzabeb.css';
import '../../css/u/utt9jeklo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="kydqj6hyx"/><path class="cobmfeb6t"/><path class="nj3ei-_1i"/><path class="pgd5l14zz"/><rect class="gm7kzabeb"/><rect transform="rotate(90 18.75 3.25)" class="utt9jeklo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:group-add-light"} {...others} />);
}

export default Component;
