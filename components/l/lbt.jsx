import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h4ryjv78a.css';
import '../../css/t/txzd8jtfb.css';
import '../../css/r/r7a_xi8an.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h4ryjv78a"/><path class="txzd8jtfb"/><path class="r7a_xi8an"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:lbt"} {...others} />);
}

export default Component;
