import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qqt3vmb-u.css';
import '../../css/j/jjt0fksdh.css';
import '../../css/s/spi5mob-q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qqt3vmb-u"/><path class="jjt0fksdh"/><path class="spi5mob-q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-field-focus-bold-duotone"} {...others} />);
}

export default Component;
