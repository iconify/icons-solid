import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uo5ov6bja.css';
import '../../css/w/wbz7ahcns.css';
import '../../css/l/lxerqacem.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uo5ov6bja"/><path class="wbz7ahcns"/><path class="lxerqacem"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:google-news"} {...others} />);
}

export default Component;
