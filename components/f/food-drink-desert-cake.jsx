import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xktuadgnz.css';
import '../../css/q/q34r_4blg.css';
import '../../css/r/r-yge7b7y.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xktuadgnz"/><path class="q34r_4blg"/><path class="r-yge7b7y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:food-drink-desert-cake"} {...others} />);
}

export default Component;
