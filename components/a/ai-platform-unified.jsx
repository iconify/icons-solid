import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukw_gmbqh.css';
import '../../css/u/u0m617c8w.css';
import '../../css/g/g6027d_my.css';
import '../../css/f/f5u_fnb3z.css';
import '../../css/j/jqc61ubda.css';
import '../../css/j/jn9qp7b4e.css';
import '../../css/f/f-zsrybke.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ukw_gmbqh"/><path class="u0m617c8w"/><circle class="g6027d_my"/><path class="f5u_fnb3z"/><circle class="jqc61ubda"/><path class="jn9qp7b4e"/><circle class="f-zsrybke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:ai-platform-unified"} {...others} />);
}

export default Component;
