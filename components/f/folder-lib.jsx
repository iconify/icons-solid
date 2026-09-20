import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w0prf1r2a.css';
import '../../css/c/c1xpauj8c.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="w0prf1r2a"/><path class="c1xpauj8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-lib"} {...others} />);
}

export default Component;
