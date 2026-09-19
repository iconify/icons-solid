import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b03zqx2zz.css';
import '../../css/h/h6r-0zwfg.css';
import '../../css/i/iu9qj1lar.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b03zqx2zz"/><path class="h6r-0zwfg"/><path class="iu9qj1lar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:role-binding-outlined"} {...others} />);
}

export default Component;
