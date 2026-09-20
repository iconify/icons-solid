import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fh3kbwobr.css';
import '../../css/a/a321_xb9d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fh3kbwobr"/><path clip-rule="evenodd" class="a321_xb9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:data-date-solid"} {...others} />);
}

export default Component;
