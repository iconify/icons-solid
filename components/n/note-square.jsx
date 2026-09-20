import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rm0sgyb_u.css';
import '../../css/a/a_kcwxb5c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rm0sgyb_u"/><path class="a_kcwxb5c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:note-square"} {...others} />);
}

export default Component;
