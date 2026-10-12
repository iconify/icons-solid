import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/et_p5ualv.css';
import '../../css/r/rudk2pbyb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="et_p5ualv"/><path class="rudk2pbyb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:person-key-fill-20"} {...others} />);
}

export default Component;
