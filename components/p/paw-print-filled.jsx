import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ui9sstfns.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ui9sstfns"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:paw-print-filled"} {...others} />);
}

export default Component;
