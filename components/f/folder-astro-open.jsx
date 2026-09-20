import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w4plhrqgv.css';
import '../../css/q/qsn33xeca.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="w4plhrqgv"/><path class="qsn33xeca"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-astro-open"} {...others} />);
}

export default Component;
