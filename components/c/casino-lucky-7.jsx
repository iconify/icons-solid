import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ooxgz1bqy.css';
import '../../css/e/e_2-vrb9c.css';
import '../../css/u/undhzu90l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ooxgz1bqy"/><path class="e_2-vrb9c"/><path class="undhzu90l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:casino-lucky-7"} {...others} />);
}

export default Component;
