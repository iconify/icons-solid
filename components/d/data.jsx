import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/npgx2ubzl.css';
import '../../css/m/md445fekn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="npgx2ubzl"/><path class="md445fekn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:data"} {...others} />);
}

export default Component;
