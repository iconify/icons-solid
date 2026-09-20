import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aitggjtuy.css';
import '../../css/g/g8i58htec.css';
import '../../css/i/ix-fez9nl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aitggjtuy"/><path class="g8i58htec"/><path class="ix-fez9nl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:headphones-human"} {...others} />);
}

export default Component;
