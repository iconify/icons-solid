import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u4-i83b6x.css';
import '../../css/c/c8yw7loqa.css';
import '../../css/y/yi_r72bau.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u4-i83b6x"/><path class="c8yw7loqa"/><path class="yi_r72bau"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:wrap-text"} {...others} />);
}

export default Component;
