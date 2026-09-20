import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g44sicinw.css';
import '../../css/l/l3-5_c46r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g44sicinw"/><path clip-rule="evenodd" class="l3-5_c46r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:polyx"} {...others} />);
}

export default Component;
