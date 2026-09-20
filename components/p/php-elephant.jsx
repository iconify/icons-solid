import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zpju4dvus.css';
import '../../css/v/v1aw9_kpp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zpju4dvus"/><path class="v1aw9_kpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:php-elephant"} {...others} />);
}

export default Component;
