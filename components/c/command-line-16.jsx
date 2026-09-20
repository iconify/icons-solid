import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vd48-oaxd.css';
import '../../css/x/xckz74v8f.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="vd48-oaxd"/><path clip-rule="evenodd" class="xckz74v8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:command-line-16"} {...others} />);
}

export default Component;
