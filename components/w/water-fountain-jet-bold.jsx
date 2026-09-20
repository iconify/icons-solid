import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a_ul2zbvr.css';
import '../../css/w/wyt00l9yp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a_ul2zbvr"/><path class="wyt00l9yp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:water-fountain-jet-bold"} {...others} />);
}

export default Component;
