import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rix0hrcrg.css';
import '../../css/z/ztrntccql.css';
import '../../css/e/ejq36vvzq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rix0hrcrg wm-k"/><path class="wm-a ztrntccql"/><path class="ejq36vvzq wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:file-image"} {...others} />);
}

export default Component;
