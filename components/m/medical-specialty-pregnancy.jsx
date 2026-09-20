import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/squhjpcha.css';
import '../../css/p/pqeyd7b6q.css';
import '../../css/x/xgnz_b60g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="squhjpcha"/><path class="pqeyd7b6q"/><path class="xgnz_b60g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:medical-specialty-pregnancy"} {...others} />);
}

export default Component;
