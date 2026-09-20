import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbx4p_6nb.css';
import '../../css/l/l4ej3fvuc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vbx4p_6nb"/><path class="l4ej3fvuc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:email-action-search-1-bold"} {...others} />);
}

export default Component;
