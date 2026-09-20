import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dcsdb2bla.css';
import '../../css/c/cpwldbcex.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="dcsdb2bla"/><path class="cpwldbcex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:caravan"} {...others} />);
}

export default Component;
