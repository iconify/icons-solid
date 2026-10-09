import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/huo95kxbo.css';
import '../../css/t/txu8yubls.css';
import '../../css/a/arzvezb5a.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="huo95kxbo"/><path class="txu8yubls"/><path class="arzvezb5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-pump-ground-20-bold"} {...others} />);
}

export default Component;
