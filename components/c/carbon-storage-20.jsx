import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ic7c4od3i.css';
import '../../css/a/akg87ebjx.css';
import '../../css/u/u4as3jk4r.css';
import '../../css/t/t2b-glb-m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ic7c4od3i"/><path class="akg87ebjx"/><path class="u4as3jk4r"/><path class="t2b-glb-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:carbon-storage-20"} {...others} />);
}

export default Component;
