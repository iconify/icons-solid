import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r8weq0bsr.css';
import '../../css/a/alpy6ei4t.css';
import '../../css/j/jorm57b9u.css';
import '../../css/v/vzjft_b5e.css';
import '../../css/f/fjulys2qb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r8weq0bsr"/><path class="alpy6ei4t"/><path class="jorm57b9u"/><path class="vzjft_b5e"/><path class="fjulys2qb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:clouds"} {...others} />);
}

export default Component;
