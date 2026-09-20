import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jj0fh1bfy.css';
import '../../css/d/dko5xdvrd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jj0fh1bfy"/><path class="dko5xdvrd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:bluetooth-transfer-bold"} {...others} />);
}

export default Component;
