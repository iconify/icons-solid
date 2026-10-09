import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dsx9eqb7z.css';
import '../../css/t/t0y9dydjl.css';
import '../../css/v/v96txsrdu.css';
import '../../css/d/d7-7yjbmu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dsx9eqb7z"/><path class="t0y9dydjl"/><path class="v96txsrdu"/><path class="d7-7yjbmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-storage-20-bold"} {...others} />);
}

export default Component;
