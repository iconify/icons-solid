import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pgkakvbrl.css';
import '../../css/b/b1rrn1b0a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pgkakvbrl"/><path class="b1rrn1b0a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:blog-blogger-logo"} {...others} />);
}

export default Component;
