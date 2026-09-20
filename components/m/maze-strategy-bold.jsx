import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e0q3n9bjy.css';
import '../../css/o/oi2dixb2x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e0q3n9bjy"/><path class="oi2dixb2x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:maze-strategy-bold"} {...others} />);
}

export default Component;
