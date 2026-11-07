import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gk6whjxer.css';
import '../../css/f/f5wyvtl3b.css';
import '../../css/f/fnd8xqbeb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gk6whjxer"/><path class="f5wyvtl3b"/><path class="fnd8xqbeb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:volleyball-2-bold"} {...others} />);
}

export default Component;
