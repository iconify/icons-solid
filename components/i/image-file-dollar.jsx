import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mi54cacqb.css';
import '../../css/d/d4gaxti0m.css';
import '../../css/y/yzlloix7v.css';
import '../../css/f/fw96eeyjg.css';
import '../../css/c/c58s-15sd.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mi54cacqb"/><path clip-rule="evenodd" class="d4gaxti0m"/><path class="yzlloix7v"/><path class="fw96eeyjg"/><path class="c58s-15sd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:image-file-dollar"} {...others} />);
}

export default Component;
