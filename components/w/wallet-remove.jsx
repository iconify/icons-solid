import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/oj8w4xbvf.css';
import '../../css/t/terq8rrsy.css';
import '../../css/m/m8kjw2c8v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="oj8w4xbvf"/><path class="terq8rrsy"/><path class="m8kjw2c8v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:wallet-remove"} {...others} />);
}

export default Component;
