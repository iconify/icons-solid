import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yal-1qa0c.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="yal-1qa0c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:pdf-file"} {...others} />);
}

export default Component;
