import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/co4u79bom.css';
import '../../css/t/t_qykii2y.css';
import '../../css/b/b6znd0b_r.css';
import '../../css/d/dgcljpugd.css';
import '../../css/g/gt-o6rbgd.css';

const viewBox = {"width":16,"height":16};
const content = `<rect class="co4u79bom"/><rect class="t_qykii2y"/><circle class="b6znd0b_r"/><circle class="dgcljpugd"/><rect class="gt-o6rbgd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:coloredpetrinets"} {...others} />);
}

export default Component;
