import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/okph2cb0o.css';
import '../../css/r/r-cemmhlw.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="okph2cb0o"/><path class="r-cemmhlw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:torsos"} {...others} />);
}

export default Component;
