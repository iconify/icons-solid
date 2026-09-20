import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/p3flthqkw.css';
import '../../css/g/g3bft9b2c.css';
import '../../css/n/n65hl0b7v.css';
import '../../css/o/oulf-17tx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="p3flthqkw"/><path class="g3bft9b2c"/><path class="n65hl0b7v"/><path class="oulf-17tx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:taxi"} {...others} />);
}

export default Component;
