import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z8-iphu6c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z8-iphu6c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:apple-fill"} {...others} />);
}

export default Component;
