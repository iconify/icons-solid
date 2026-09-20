import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dlvw76bka.css';
import '../../css/u/uwlyphbtd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="dlvw76bka"/><path class="uwlyphbtd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:food-drink-egg"} {...others} />);
}

export default Component;
