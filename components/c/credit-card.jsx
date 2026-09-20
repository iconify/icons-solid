import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/etpj0ljio.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="etpj0ljio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-line-icons:credit-card"} {...others} />);
}

export default Component;
