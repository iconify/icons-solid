import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dj_t_y_1r.css';
import '../../css/l/lm83njutd.css';
import '../../css/a/a1qgftbsv.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="dj_t_y_1r"/><path class="lm83njutd"/><path class="a1qgftbsv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:lua"} {...others} />);
}

export default Component;
