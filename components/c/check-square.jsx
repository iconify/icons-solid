import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o0h2j8b2i.css';
import '../../css/g/g-kcfqbux.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o0h2j8b2i"/><path class="g-kcfqbux"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:check-square"} {...others} />);
}

export default Component;
