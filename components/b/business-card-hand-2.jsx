import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/eeti5hbwe.css';
import '../../css/s/scf896bnp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="eeti5hbwe"/><path class="scf896bnp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:business-card-hand-2"} {...others} />);
}

export default Component;
