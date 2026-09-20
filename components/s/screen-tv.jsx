import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zbvlf5bbv.css';
import '../../css/t/tkzmiab1u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="zbvlf5bbv"/><path class="tkzmiab1u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:screen-tv"} {...others} />);
}

export default Component;
