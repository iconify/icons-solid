import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a7kmq_acp.css';
import '../../css/w/w55c0y9-s.css';
import '../../css/a/a9wuyub9g.css';
import '../../css/e/ebn852b9b.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a7kmq_acp"/><path class="w55c0y9-s"/><path class="a9wuyub9g"/><path class="ebn852b9b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:teapot-48"} {...others} />);
}

export default Component;
