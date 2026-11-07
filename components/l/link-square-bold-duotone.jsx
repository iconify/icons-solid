import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pv_hji6de.css';
import '../../css/o/ovnacibyj.css';
import '../../css/h/h4_-fn3-j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pv_hji6de"/><path class="ovnacibyj"/><path class="h4_-fn3-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:link-square-bold-duotone"} {...others} />);
}

export default Component;
