import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vjbc43igg.css';
import '../../css/a/a_barob7i.css';
import '../../css/k/kffkq4b9z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vjbc43igg"/><path class="a_barob7i"/><path class="kffkq4b9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:visual-inspection"} {...others} />);
}

export default Component;
