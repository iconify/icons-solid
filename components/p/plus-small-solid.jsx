import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iku3gdbcn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="iku3gdbcn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:plus-small-solid"} {...others} />);
}

export default Component;
