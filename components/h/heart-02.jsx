import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d4dxw5t5s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d4dxw5t5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:heart-02"} {...others} />);
}

export default Component;
