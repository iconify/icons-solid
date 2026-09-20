import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/n8zq3nb9u.css';
import '../../css/j/j8vzgqi8c.css';
import '../../css/v/vlq40abrs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="n8zq3nb9u"/><path class="j8vzgqi8c"/><path class="vlq40abrs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:shipment-search"} {...others} />);
}

export default Component;
