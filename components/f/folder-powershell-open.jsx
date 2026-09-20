import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/da1i54d5m.css';
import '../../css/b/bsbw6h5dv.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="da1i54d5m"/><path class="bsbw6h5dv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-powershell-open"} {...others} />);
}

export default Component;
