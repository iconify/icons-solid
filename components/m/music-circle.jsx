import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/t9rbyychv.css';
import '../../css/e/eo22vc03g.css';
import '../../css/g/gz6xmvf9a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="t9rbyychv"/><path class="eo22vc03g"/><path class="gz6xmvf9a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:music-circle"} {...others} />);
}

export default Component;
