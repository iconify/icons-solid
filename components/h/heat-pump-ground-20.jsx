import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b2cai_bki.css';
import '../../css/b/bq2hwibav.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="b2cai_bki"/><path clip-rule="evenodd" class="bq2hwibav"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-pump-ground-20"} {...others} />);
}

export default Component;
