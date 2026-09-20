import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fqaciybhw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fqaciybhw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:chevron-left-alt-duotone"} {...others} />);
}

export default Component;
