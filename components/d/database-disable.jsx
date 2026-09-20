import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/efws-ccxq.css';
import '../../css/y/yymuc5b7f.css';
import '../../css/d/d9zjmy7gh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="efws-ccxq"/><path class="yymuc5b7f"/><path class="d9zjmy7gh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:database-disable"} {...others} />);
}

export default Component;
