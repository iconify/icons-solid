import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ajn8phm8g.css';
import '../../css/k/k40n7cc3w.css';
import '../../css/z/za4zvgzpd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ajn8phm8g"/><path class="k40n7cc3w"/><path class="za4zvgzpd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:construction-building-real-eastate"} {...others} />);
}

export default Component;
