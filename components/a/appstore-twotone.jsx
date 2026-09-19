import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/es1zkkb-o.css';
import '../../css/c/ca3j5lbpe.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="es1zkkb-o"/><path class="ca3j5lbpe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:appstore-twotone"} {...others} />);
}

export default Component;
