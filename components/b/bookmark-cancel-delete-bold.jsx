import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_8ntkbfc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="k_8ntkbfc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:bookmark-cancel-delete-bold"} {...others} />);
}

export default Component;
