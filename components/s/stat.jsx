import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/o/odref3f8x.css';
import '../../css/e/erl_wlh6f.css';
import '../../css/y/ynh1yubit.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><rect class="odref3f8x"/><rect class="erl_wlh6f"/><rect class="ynh1yubit"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:stat"} {...others} />);
}

export default Component;
