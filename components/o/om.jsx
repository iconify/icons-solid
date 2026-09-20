import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eh8c8_b8p.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="eh8c8_b8p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:om"} {...others} />);
}

export default Component;
