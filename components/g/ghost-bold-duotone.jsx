import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hpc_n_8lm.css';
import '../../css/g/go4rm8bar.css';
import '../../css/r/r2dvf4bly.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hpc_n_8lm"/><path class="go4rm8bar"/><path class="r2dvf4bly"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ghost-bold-duotone"} {...others} />);
}

export default Component;
