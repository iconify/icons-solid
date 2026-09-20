import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/t/t_i4dtsnp.css';
import '../../css/z/zkxt3mbow.css';
import '../../css/i/i6l4bjb4l.css';
import '../../css/d/dowb2e7my.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="t_i4dtsnp"/><path class="zkxt3mbow"/><path class="i6l4bjb4l"/><path class="dowb2e7my"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:slide-share-logo"} {...others} />);
}

export default Component;
