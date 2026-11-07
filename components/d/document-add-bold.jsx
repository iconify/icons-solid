import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m6bs9-bbu.css';
import '../../css/d/dehw9gqms.css';
import '../../css/e/eep2d1vox.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="m6bs9-bbu"/><path class="dehw9gqms"/><path class="eep2d1vox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:document-add-bold"} {...others} />);
}

export default Component;
