import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtmc67bsf.css';
import '../../css/z/zaro8kx4p.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jtmc67bsf"/><path class="zaro8kx4p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-television-open"} {...others} />);
}

export default Component;
