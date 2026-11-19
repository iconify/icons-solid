import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n_r2ripro.css';
import '../../css/z/z6nk96o2v.css';
import '../../css/b/bwrek3eeo.css';
import '../../css/w/wtqmkcwqo.css';
import '../../css/h/hu6ftn14k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n_r2ripro"/><path class="z6nk96o2v"/><path class="bwrek3eeo"/><path class="wtqmkcwqo"/><path class="hu6ftn14k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:headphones-filled"} {...others} />);
}

export default Component;
