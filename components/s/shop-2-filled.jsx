import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kis6e-brh.css';
import '../../css/v/vefb5s21n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kis6e-brh"/><path class="vefb5s21n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:shop-2-filled"} {...others} />);
}

export default Component;
