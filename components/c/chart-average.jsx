import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kc7z52rjt.css';
import '../../css/v/v3vofob6e.css';
import '../../css/o/ovnqk_b4p.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kc7z52rjt"/><path class="v3vofob6e"/><path class="ovnqk_b4p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:chart-average"} {...others} />);
}

export default Component;
