import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ujuqxqbou.css';
import '../../css/c/cfqt67jpg.css';

const viewBox = {"width":16,"height":16};
const content = `<circle class="ujuqxqbou"/><path class="cfqt67jpg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:plus-circle-stroke-16"} {...others} />);
}

export default Component;
