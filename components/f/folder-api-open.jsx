import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtmc67bsf.css';
import '../../css/l/l6g1gqb7e.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jtmc67bsf"/><path class="l6g1gqb7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-api-open"} {...others} />);
}

export default Component;
