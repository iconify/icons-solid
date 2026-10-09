import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/abdw3sbya.css';
import '../../css/l/lpjx8vm8f.css';
import '../../css/d/d4fb8-n_r.css';
import '../../css/v/v0q86cqji.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="abdw3sbya"/><path class="lpjx8vm8f"/><path class="d4fb8-n_r"/><path class="v0q86cqji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-recycle-48-bold"} {...others} />);
}

export default Component;
