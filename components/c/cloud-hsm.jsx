import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkirl6aao.css';
import '../../css/y/ycxy3ibvm.css';
import '../../css/e/e8p7y_qme.css';
import '../../css/j/joecqgbsj.css';
import '../../css/g/gdnvv9b7q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dkirl6aao"/><path class="ycxy3ibvm"/><path class="e8p7y_qme"/><path class="joecqgbsj"/><path class="gdnvv9b7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:cloud-hsm"} {...others} />);
}

export default Component;
