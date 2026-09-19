import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sq78els5g.css';
import '../../css/p/pnp4hqbbq.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="sq78els5g"/><path class="pnp4hqbbq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:folder-cursor"} {...others} />);
}

export default Component;
