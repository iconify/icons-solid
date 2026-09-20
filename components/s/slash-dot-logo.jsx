import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtc8mk_md.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xtc8mk_md"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:slash-dot-logo"} {...others} />);
}

export default Component;
