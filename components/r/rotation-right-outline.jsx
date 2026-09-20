import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/owy-2xwyv.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="owy-2xwyv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:rotation-right-outline"} {...others} />);
}

export default Component;
