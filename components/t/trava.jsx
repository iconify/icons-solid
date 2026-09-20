import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jka59sbfy.css';
import '../../css/s/syimw_bzt.css';
import '../../css/y/yeqou0bji.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jka59sbfy"/><path class="syimw_bzt"/><path class="yeqou0bji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:trava"} {...others} />);
}

export default Component;
