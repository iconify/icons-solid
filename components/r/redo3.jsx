import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wi27y7kjn.css';
import '../../css/f/f2yo0d6nj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wi27y7kjn"/><path class="f2yo0d6nj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:redo3"} {...others} />);
}

export default Component;
