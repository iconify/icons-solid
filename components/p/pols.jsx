import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wzls2o0vs.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wzls2o0vs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:pols"} {...others} />);
}

export default Component;
