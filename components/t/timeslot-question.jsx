import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n3doeqbkg.css';

const viewBox = {"width":2560,"height":1344};
const content = `<path class="n3doeqbkg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:timeslot-question"} {...others} />);
}

export default Component;
