import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u6kqbx0kr.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="u6kqbx0kr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:broadcast"} {...others} />);
}

export default Component;
