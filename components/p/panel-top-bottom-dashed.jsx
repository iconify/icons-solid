import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pyybe2kkg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pyybe2kkg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:panel-top-bottom-dashed"} {...others} />);
}

export default Component;
