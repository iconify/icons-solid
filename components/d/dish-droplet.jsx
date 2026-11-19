import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cn6gb_edc.css';
import '../../css/z/zf7mhnbsb.css';
import '../../css/u/uswr87b-r.css';
import '../../css/k/k37kxaccx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cn6gb_edc"/><path class="zf7mhnbsb"/><path class="uswr87b-r"/><path class="k37kxaccx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:dish-droplet"} {...others} />);
}

export default Component;
