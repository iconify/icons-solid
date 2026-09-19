import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/amgm47b4x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="amgm47b4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:dots-vertical-rounded"} {...others} />);
}

export default Component;
