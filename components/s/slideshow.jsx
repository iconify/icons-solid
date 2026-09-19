import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ryrdczeve.css';
import '../../css/h/hsnx_9cta.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-secondary-layer ryrdczeve"/><path class="duoicon-primary-layer hsnx_9cta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:slideshow"} {...others} />);
}

export default Component;
