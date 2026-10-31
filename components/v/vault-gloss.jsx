import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gt9m4abwz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gt9m4abwz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:vault-gloss"} {...others} />);
}

export default Component;
