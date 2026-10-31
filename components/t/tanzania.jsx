import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vdkvhrb6r.css';
import '../../css/p/pv9u-rb9t.css';
import '../../css/f/f839d4bkr.css';
import '../../css/s/sn3nb_u0r.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="vdkvhrb6r"/><path class="pv9u-rb9t"/><path class="f839d4bkr"/><path class="sn3nb_u0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:tanzania"} {...others} />);
}

export default Component;
