import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e0u6p4b4f.css';
import '../../css/p/pwhl4tsws.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e0u6p4b4f"/><path class="pwhl4tsws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:tags-favorite-bold"} {...others} />);
}

export default Component;
