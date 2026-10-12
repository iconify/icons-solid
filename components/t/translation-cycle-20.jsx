import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hfd6n_b5f.css';
import '../../css/h/h7y14-blq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hfd6n_b5f"/><path class="h7y14-blq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:translation-cycle-20"} {...others} />);
}

export default Component;
