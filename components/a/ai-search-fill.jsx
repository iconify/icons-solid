import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zgej7mwsz.css';
import '../../css/y/ysf6s1bcn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zgej7mwsz"/><path class="ysf6s1bcn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:ai-search-fill"} {...others} />);
}

export default Component;
