import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ucd-8ebmt.css';
import '../../css/d/d3c-6wbuu.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ucd-8ebmt"/><path class="d3c-6wbuu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:info"} {...others} />);
}

export default Component;
