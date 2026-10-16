import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zxd5-pbku.css';
import '../../css/f/fblpe-b2f.css';
import '../../css/c/c65-ehvfy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zxd5-pbku"/><path class="fblpe-b2f"/><path class="c65-ehvfy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:vertical-solar-48"} {...others} />);
}

export default Component;
