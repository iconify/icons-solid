import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hmelscxim.css';
import '../../css/f/fr2o6d1gz.css';
import '../../css/b/bxyy2ccnm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hmelscxim"/><path class="fr2o6d1gz"/><path class="bxyy2ccnm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:house-chimney"} {...others} />);
}

export default Component;
