import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cm4astalv.css';
import '../../css/u/utwll5b5g.css';
import '../../css/l/lj7iiqb-j.css';
import '../../css/d/d-02mibho.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cm4astalv"/><path class="utwll5b5g"/><path class="lj7iiqb-j"/><path class="d-02mibho"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:database-backup"} {...others} />);
}

export default Component;
