import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/au-d75czj.css';
import '../../css/s/ssbjp9b9f.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="au-d75czj"/><circle class="ssbjp9b9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:img-box-duotone"} {...others} />);
}

export default Component;
