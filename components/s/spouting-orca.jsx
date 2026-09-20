import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yx2z2_bmy.css';
import '../../css/a/a8dw5zbze.css';
import '../../css/n/n05rifjbu.css';
import '../../css/o/o4--dac7r.css';
import '../../css/j/jamdwgbff.css';
import '../../css/h/hjczt2g6i.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="yx2z2_bmy"/><path class="a8dw5zbze"/><path class="n05rifjbu"/><circle class="o4--dac7r"/><path class="jamdwgbff"/><path class="hjczt2g6i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:spouting-orca"} {...others} />);
}

export default Component;
