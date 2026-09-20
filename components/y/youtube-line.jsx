import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dj_edtbco.css';
import '../../css/n/n3kf-o-ku.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dj_edtbco"/><path class="n3kf-o-ku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:youtube-line"} {...others} />);
}

export default Component;
