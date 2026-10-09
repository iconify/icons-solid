import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ftrudtbys.css';
import '../../css/g/gnd-n5ber.css';
import '../../css/z/zawixke2s.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ftrudtbys"/><path class="gnd-n5ber"/><path class="zawixke2s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ice-melt-20-bold"} {...others} />);
}

export default Component;
