import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gvxwz-brr.css';
import '../../css/z/zpzbcrshu.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="gvxwz-brr"/><path class="zpzbcrshu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:rope-fence"} {...others} />);
}

export default Component;
