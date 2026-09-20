import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e64vo7e9t.css';
import '../../css/i/iste4e9kh.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="e64vo7e9t ouiIcon__fillSecondary"/><path class="iste4e9kh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:app-ml"} {...others} />);
}

export default Component;
