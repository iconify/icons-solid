import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lohg0pbwp.css';
import '../../css/v/v5tal47iw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="lohg0pbwp"/><path class="v5tal47iw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:folder-file-alt-duotone-fill"} {...others} />);
}

export default Component;
