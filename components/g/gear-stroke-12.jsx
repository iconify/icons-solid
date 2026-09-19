import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eii-1ollo.css';
import '../../css/a/ahciwmy7z.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="eii-1ollo"/><circle class="ahciwmy7z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:gear-stroke-12"} {...others} />);
}

export default Component;
