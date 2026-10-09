import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xujk5fdpi.css';
import '../../css/x/x1dswctxk.css';
import '../../css/z/zjk_4wbaj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xujk5fdpi"/><path class="x1dswctxk"/><path class="zjk_4wbaj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-truck-48"} {...others} />);
}

export default Component;
