import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/scrsn1bbj.css';
import '../../css/t/tsynbibhk.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="scrsn1bbj"/><path class="tsynbibhk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:food-drink-fruit-cherry"} {...others} />);
}

export default Component;
