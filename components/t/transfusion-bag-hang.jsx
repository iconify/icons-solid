import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k4q6awbpv.css';
import '../../css/x/x_0ryiugy.css';
import '../../css/c/ci714_bmb.css';
import '../../css/t/tk7r0jbid.css';
import '../../css/o/on547zbmu.css';
import '../../css/r/rp6dccclj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="k4q6awbpv"/><path class="x_0ryiugy"/><path class="ci714_bmb"/><path class="tk7r0jbid"/><path class="on547zbmu"/><path class="rp6dccclj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:transfusion-bag-hang"} {...others} />);
}

export default Component;
