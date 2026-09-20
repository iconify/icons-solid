import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in1dviszv.css';
import '../../css/x/xhy88vwup.css';
import '../../css/y/ycei_eggs.css';
import '../../css/e/ekndu2biw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="in1dviszv"><path class="xhy88vwup"/><path class="ycei_eggs"/><path class="ekndu2biw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:notification3"} {...others} />);
}

export default Component;
