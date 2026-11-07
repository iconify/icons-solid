import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eo1l5rcxq.css';
import '../../css/b/b_j6hhbtr.css';
import '../../css/z/z5zquhbop.css';
import '../../css/o/o6jikm0xc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eo1l5rcxq"/><path class="b_j6hhbtr"/><path class="z5zquhbop"/><path clip-rule="evenodd" class="o6jikm0xc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:facemask-circle-bold"} {...others} />);
}

export default Component;
