import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eeftfubxz.css';
import '../../css/r/rlfkotbsg.css';
import '../../css/t/traeju0bc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="eeftfubxz"/><path class="rlfkotbsg"/><path class="traeju0bc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:food-drink-desert-cake-pond"} {...others} />);
}

export default Component;
