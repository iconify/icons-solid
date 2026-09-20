import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ds6o01r6n.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ds6o01r6n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:square-arrows-right"} {...others} />);
}

export default Component;
