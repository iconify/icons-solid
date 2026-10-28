import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ztw6jsdfu.css';
import '../../css/p/po93bzbuh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ztw6jsdfu"/><path class="po93bzbuh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:fileflows-forge-dark"} {...others} />);
}

export default Component;
