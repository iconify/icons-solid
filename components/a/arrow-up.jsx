import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h3nouv9br.css';
import '../../css/j/jcpgslicg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h3nouv9br"/><path class="jcpgslicg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:arrow-up"} {...others} />);
}

export default Component;
