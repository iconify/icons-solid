import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xxjfcsudw.css';
import '../../css/q/q-qy_1ldb.css';
import '../../css/v/v0mgkb00e.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="xxjfcsudw"/><path class="q-qy_1ldb"/><path class="v0mgkb00e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:typeorm-wordmark"} {...others} />);
}

export default Component;
