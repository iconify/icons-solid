import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gsthg0bza.css';
import '../../css/p/pptl0qd1i.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gsthg0bza"/><path class="pptl0qd1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:school-science-dna"} {...others} />);
}

export default Component;
