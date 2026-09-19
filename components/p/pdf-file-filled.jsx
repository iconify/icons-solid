import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t8s7p28am.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="t8s7p28am"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:pdf-file-filled"} {...others} />);
}

export default Component;
