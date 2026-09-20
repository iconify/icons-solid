import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yyci4acry.css';
import '../../css/j/jy7_ogj-g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yyci4acry"/><path class="jy7_ogj-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:thermometer-line"} {...others} />);
}

export default Component;
