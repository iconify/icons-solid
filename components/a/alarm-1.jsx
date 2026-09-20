import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u0piq7bju.css';
import '../../css/j/jqhsxpb4d.css';
import '../../css/r/rztgfrb4g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u0piq7bju"/><path class="jqhsxpb4d"/><path clip-rule="evenodd" class="rztgfrb4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:alarm-1"} {...others} />);
}

export default Component;
