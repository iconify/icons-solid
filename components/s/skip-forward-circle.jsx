import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qdby9qbpj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qdby9qbpj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:skip-forward-circle"} {...others} />);
}

export default Component;
