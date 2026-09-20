import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nn_mdboia.css';
import '../../css/k/k78ldxeyy.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="nn_mdboia"/><path class="k78ldxeyy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:food-drink-fish"} {...others} />);
}

export default Component;
