import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lzwi_04ry.css';
import '../../css/b/b211n8bbq.css';
import '../../css/k/kkjeueuqj.css';
import '../../css/l/ly9osabyz.css';
import '../../css/g/g0wwjw9mn.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="lzwi_04ry"/><path class="b211n8bbq"/><path class="kkjeueuqj"/><path class="ly9osabyz"/><path class="g0wwjw9mn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:building-real-eastate-deal-documant"} {...others} />);
}

export default Component;
