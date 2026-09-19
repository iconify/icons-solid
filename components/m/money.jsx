import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s34_ysbgj.css';
import '../../css/l/l5ntip6-x.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="s34_ysbgj"/><path class="l5ntip6-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:money"} {...others} />);
}

export default Component;
