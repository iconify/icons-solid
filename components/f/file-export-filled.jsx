import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a75vaqbtg.css';
import '../../css/m/m-ex0ftgv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a75vaqbtg"/><path class="m-ex0ftgv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:file-export-filled"} {...others} />);
}

export default Component;
