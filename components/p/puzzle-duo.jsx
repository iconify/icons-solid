import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m60pqtldl.css';
import '../../css/s/sui4_vb3a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m60pqtldl secondary"/><path class="primary sui4_vb3a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:puzzle-duo"} {...others} />);
}

export default Component;
