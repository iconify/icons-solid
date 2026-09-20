import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vfl_-cgfn.css';
import '../../css/b/btnov_7jm.css';
import '../../css/x/xcwbr8b4u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vfl_-cgfn"/><path class="btnov_7jm"/><path class="xcwbr8b4u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:note-favorite"} {...others} />);
}

export default Component;
