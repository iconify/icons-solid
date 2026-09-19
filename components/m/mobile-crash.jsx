import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pej5vegmf.css';
import '../../css/s/sqh-tvbfl.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="pej5vegmf"/><path class="sqh-tvbfl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:mobile-crash"} {...others} />);
}

export default Component;
