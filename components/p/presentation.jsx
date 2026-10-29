import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ksor9la2b.css';
import '../../css/k/k77tf5bom.css';
import '../../css/s/svi179bkq.css';
import '../../css/p/pbw7u6bac.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ksor9la2b wm-a"/><path class="k77tf5bom wm-k"/><path class="svi179bkq wm-a"/><path class="pbw7u6bac wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:presentation"} {...others} />);
}

export default Component;
