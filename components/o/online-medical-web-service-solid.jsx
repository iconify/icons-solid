import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dtpmbuzqw.css';
import '../../css/a/afv8obb9x.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="dtpmbuzqw"/><path class="afv8obb9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:online-medical-web-service-solid"} {...others} />);
}

export default Component;
