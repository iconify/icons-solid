import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ynyh7db1r.css';
import '../../css/t/th8xxac7d.css';

const viewBox = {"width":11,"height":11};
const content = `<path class="ynyh7db1r"/><path class="th8xxac7d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:bank-11"} {...others} />);
}

export default Component;
