import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fdhc87aim.css';
import '../../css/b/bjaydi71w.css';
import '../../css/d/deitqfq6b.css';
import '../../css/x/xuok7lh9a.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="fdhc87aim"/><circle class="bjaydi71w"/><circle class="deitqfq6b"/><circle class="xuok7lh9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:list"} {...others} />);
}

export default Component;
