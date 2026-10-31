import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qlsrw1b-f.css';
import '../../css/l/lmk6h0bvk.css';
import '../../css/m/m8y_5gyeu.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="qlsrw1b-f"/><path class="lmk6h0bvk"/><path class="m8y_5gyeu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:thailand"} {...others} />);
}

export default Component;
