import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bvw48nbhb.css';
import '../../css/o/owqh_f_dn.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="bvw48nbhb"/><path class="owqh_f_dn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:cloud-up-down-16"} {...others} />);
}

export default Component;
