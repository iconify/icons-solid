import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/emr3p-0fx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="emr3p-0fx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:layout-sidebar-right-expand-filled"} {...others} />);
}

export default Component;
