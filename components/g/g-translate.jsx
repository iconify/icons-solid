import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ggv24lm0s.css';
import '../../css/q/qki1cds-o.css';
import '../../css/s/s6aioybet.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-secondary-layer ggv24lm0s"/><path class="duoicon-primary-layer qki1cds-o"/><path class="duoicon-primary-layer s6aioybet"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:g-translate"} {...others} />);
}

export default Component;
