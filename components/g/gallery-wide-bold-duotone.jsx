import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bf2z5ab9j.css';
import '../../css/i/iubpiibgw.css';
import '../../css/c/cnfam5b5i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bf2z5ab9j"/><path clip-rule="evenodd" class="iubpiibgw"/><path class="cnfam5b5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gallery-wide-bold-duotone"} {...others} />);
}

export default Component;
