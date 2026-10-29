import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ilowjdbfq.css';
import '../../css/b/bub42fbya.css';
import '../../css/g/gc0jj5bbl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ilowjdbfq"/><path class="bub42fbya"/><path class="gc0jj5bbl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:ice-cream"} {...others} />);
}

export default Component;
