import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ym1-p9fks.css';
import '../../css/n/nshdljy6n.css';
import '../../css/d/djzyicbhv.css';
import '../../css/g/gmy1m45sh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ym1-p9fks"/><path class="nshdljy6n"/><path class="djzyicbhv"/><path class="gmy1m45sh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:city"} {...others} />);
}

export default Component;
