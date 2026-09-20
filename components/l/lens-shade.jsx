import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pqbcu6boo.css';
import '../../css/o/og6l3db7m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pqbcu6boo"/><path class="og6l3db7m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:lens-shade"} {...others} />);
}

export default Component;
